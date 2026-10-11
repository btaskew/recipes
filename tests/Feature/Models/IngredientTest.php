<?php

use App\Models\Ingredient;
use App\Models\Recipe;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('an ingredient belongs to many recipes', function () {
    $ingredient = Ingredient::factory()->create();
    $recipes = Recipe::factory()->count(2)->create();

    $ingredient->recipes()->attach($recipes);

    expect($ingredient->recipes)->toHaveCount(2);
});
