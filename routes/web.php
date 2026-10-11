<?php

use App\Models\Ingredient;
use App\Models\Recipe;
use Illuminate\Support\Facades\Route;

Route::view('/', 'home')->name('home');

Route::view('/recipes/create', 'recipes.create')->name('recipes.create');

Route::get('/recipes/{recipe}', function (Recipe $recipe) {
    return view('recipes.show', ['recipe' => $recipe->load('ingredients')]);
})->name('recipes.show');

Route::get('test', function () {
    return Ingredient::all();
});
