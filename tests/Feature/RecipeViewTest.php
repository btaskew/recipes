<?php

use App\Models\Recipe;
use App\Models\Ingredient;
use App\Models\Tag;

test('can view a recipe', function () {
    $recipe = Recipe::factory()->create([
        'name' => 'Spaghetti Bolognese',
        'method_value' => 'Cook the pasta. Make the sauce. Mix them.'
    ]);

    $ingredient = Ingredient::factory()->create(['name' => 'Spaghetti']);
    $recipe->ingredients()->attach($ingredient, ['quantity' => '200g']);

    $tags = Tag::factory(2)->create();
    $recipe->tags()->attach($tags);

    $response = $this->get(route('recipes.show', $recipe));

    $response->assertStatus(200)
        ->assertSee('Spaghetti Bolognese')
        ->assertSee('Spaghetti')
        ->assertSee('200g')
        ->assertSee('Cook the pasta. Make the sauce. Mix them.');

    foreach ($tags as $tag) {
        $response->assertSee($tag->name);
    }
});

test('it displays method as a link when method_type is url', function () {
    $url = 'https://example.com/recipe';
    $recipe = Recipe::factory()->create([
        'method_type' => 'url',
        'method_value' => $url,
    ]);

    $response = $this->get(route('recipes.show', $recipe));

    $response->assertSee('<a href="' . $url . '"', false);
    $response->assertSee('target="_blank"', false);
    $response->assertSee('rel="noopener noreferrer"', false);
});
