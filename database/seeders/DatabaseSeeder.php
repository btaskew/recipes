<?php

namespace Database\Seeders;

use App\Models\Ingredient;
use App\Models\Recipe;
use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $ingredients = Ingredient::factory(50)->create();
        $tags = Tag::factory(30)->create();

        Recipe::factory(20)->create()->each(function (Recipe $recipe) use ($ingredients, $tags) {
            $selectedIngredients = $ingredients->random(5);
            $ingredientsWithQuantities = [];

            foreach ($selectedIngredients as $ingredient) {
                $ingredientsWithQuantities[$ingredient->id] = [
                    'quantity' => fake()->randomDigit() . ' ' . fake()->randomElement(['g', 'ml', 'pcs', 'tsp', 'tbsp']),
                ];
            }

            $recipe->ingredients()->attach($ingredientsWithQuantities);

            $recipe->tags()->attach($tags->random(3));
        });
    }
}
