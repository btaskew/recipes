<?php

use App\Models\Ingredient;
use App\Models\Recipe;
use App\Models\Tag;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('a recipe has many ingredients', function () {
    $recipe = Recipe::factory()->create();
    $ingredients = Ingredient::factory()->count(3)->create();

    $recipe->ingredients()->attach($ingredients->pluck('id'), ['quantity' => '100g']);

    expect($recipe->ingredients)->toHaveCount(3)
        ->and($recipe->ingredients->first()->pivot->quantity)->toBe('100g');
});

test('a recipe has many tags', function () {
    $recipe = Recipe::factory()->create();
    $tags = Tag::factory()->count(2)->create();

    $recipe->tags()->attach($tags);

    expect($recipe->tags)->toHaveCount(2);
});
