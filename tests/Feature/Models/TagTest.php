<?php

use App\Models\Recipe;
use App\Models\Tag;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('a tag belongs to many recipes', function () {
    $tag = Tag::factory()->create();
    $recipes = Recipe::factory()->count(2)->create();

    $tag->recipes()->attach($recipes);

    expect($tag->recipes)->toHaveCount(2);
});
