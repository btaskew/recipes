<?php

use App\Models\Ingredient;
use App\Models\Recipe;
use Livewire\Livewire;

test('create recipe page is accessible', function () {
    $this->get('/recipes/create')
        ->assertStatus(200)
        ->assertSeeLivewire('create-recipe');
});

test('it validates required fields', function () {
    Livewire::test('create-recipe')
        ->call('save')
        ->assertHasErrors([
            'name' => 'required',
            'method_type' => 'required',
            'method_value' => 'required',
        ]);
});

test('it validates method_type must be in allowed list', function () {
    Livewire::test('create-recipe')
        ->set('method_type', 'invalid')
        ->call('save')
        ->assertHasErrors(['method_type' => 'in']);
});

test('can save a recipe with url type', function () {
    Livewire::test('create-recipe')
        ->set('name', 'My New Recipe')
        ->set('method_type', 'url')
        ->set('method_value', 'https://example.com/recipe')
        ->call('save')
        ->assertHasNoErrors()
        ->assertRedirect(route('home'));

    $this->assertDatabaseHas('recipes', [
        'name' => 'My New Recipe',
        'method_type' => 'url',
        'method_value' => 'https://example.com/recipe',
    ]);
});

test('can save a recipe with book type', function () {
    Livewire::test('create-recipe')
        ->set('name', 'Cookbook Recipe')
        ->set('method_type', 'book')
        ->set('method_value', 'Grandma\'s Cookbook, page 42')
        ->call('save')
        ->assertHasNoErrors();

    $this->assertDatabaseHas('recipes', [
        'name' => 'Cookbook Recipe',
        'method_type' => 'book',
        'method_value' => 'Grandma\'s Cookbook, page 42',
    ]);
});

test('can save a recipe with steps type', function () {
    $steps = "Step 1: Chop onions.\nStep 2: Fry them.";
    Livewire::test('create-recipe')
        ->set('name', 'Fried Onions')
        ->set('method_type', 'steps')
        ->set('method_value', $steps)
        ->call('save')
        ->assertHasNoErrors();

    $this->assertDatabaseHas('recipes', [
        'name' => 'Fried Onions',
        'method_type' => 'steps',
        'method_value' => $steps,
    ]);
});

test('can search for existing ingredients', function () {
    Ingredient::factory()->create(['name' => 'Salt']);
    Ingredient::factory()->create(['name' => 'Sugar']);

    Livewire::test('create-recipe')
        ->set('ingredientSearch', 'Sa')
        ->assertSee('Salt')
        ->assertDontSee('Sugar');
});

test('can add an ingredient to the recipe using the add button', function () {
    Livewire::test('create-recipe')
        ->set('ingredientSearch', 'Cinnamon')
        ->call('addIngredient', 'Cinnamon')
        ->assertSet('addedIngredients', [
            ['name' => 'Cinnamon', 'quantity' => ''],
        ])
        ->assertSet('ingredientSearch', '');
});

test('can add an ingredient to the recipe', function () {
    Livewire::test('create-recipe')
        ->set('ingredientSearch', 'Flour')
        ->call('addIngredient', 'Flour')
        ->assertSet('addedIngredients', [
            ['name' => 'Flour', 'quantity' => ''],
        ])
        ->assertSet('ingredientSearch', '');
});

test('can remove an ingredient from the recipe', function () {
    Livewire::test('create-recipe')
        ->set('addedIngredients', [
            ['name' => 'Flour', 'quantity' => '1 cup'],
            ['name' => 'Sugar', 'quantity' => '1/2 cup'],
        ])
        ->call('removeIngredient', 0)
        ->assertSet('addedIngredients', [
            ['name' => 'Sugar', 'quantity' => '1/2 cup'],
        ]);
});

test('cannot add the same ingredient more than once', function () {
    Livewire::test('create-recipe')
        ->call('addIngredient', 'Salt')
        ->call('addIngredient', 'salt') // Case-insensitive check
        ->call('addIngredient', ' Salt ') // Whitespace check
        ->assertSet('addedIngredients', [
            ['name' => 'Salt', 'quantity' => ''],
        ]);
});

test('saving a recipe creates new ingredients and associations', function () {
    Ingredient::factory()->create(['name' => 'Salt']);

    Livewire::test('create-recipe')
        ->set('name', 'Salted Water')
        ->set('method_type', 'steps')
        ->set('method_value', 'Boil water, add salt.')
        ->set('addedIngredients', [
            ['name' => 'Salt', 'quantity' => '1 tsp'],
            ['name' => 'Water', 'quantity' => '1 liter'],
        ])
        ->call('save')
        ->assertHasNoErrors();

    $recipe = Recipe::where('name', 'Salted Water')->first();
    $this->assertNotNull($recipe);

    $this->assertDatabaseHas('ingredients', ['name' => 'Salt']);
    $this->assertDatabaseHas('ingredients', ['name' => 'Water']);

    $this->assertDatabaseHas('recipe_ingredients', [
        'recipe_id' => $recipe->id,
        'ingredient_id' => Ingredient::where('name', 'Salt')->first()->id,
        'quantity' => '1 tsp',
    ]);

    $this->assertDatabaseHas('recipe_ingredients', [
        'recipe_id' => $recipe->id,
        'ingredient_id' => Ingredient::where('name', 'Water')->first()->id,
        'quantity' => '1 liter',
    ]);
});
