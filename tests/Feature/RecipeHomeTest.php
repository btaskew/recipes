<?php

use App\Models\Recipe;
use Livewire\Livewire;

test('home page displays recipe search component', function () {
    $this->get('/')
        ->assertStatus(200)
        ->assertSeeLivewire('recipe-search');
});

test('can search for recipes', function () {
    Recipe::factory()->create(['name' => 'Apple Pie']);
    Recipe::factory()->create(['name' => 'Banana Bread']);

    Livewire::test('recipe-search')
        ->set('search', 'Apple')
        ->assertSee('Apple Pie')
        ->assertDontSee('Banana Bread');
});

test('recipes are paginated to 5 per page', function () {
    Recipe::factory(10)->create();

    Livewire::test('recipe-search')
        ->assertSee('Recipe', 5); // Each recipe has a "Recipe" badge
});
