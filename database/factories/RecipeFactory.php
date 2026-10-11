<?php

namespace Database\Factories;

use App\Models\Recipe;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Recipe>
 */
class RecipeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $methodType = fake()->randomElement(['url', 'book', 'steps']);

        return [
            'name' => fake()->sentence(3),
            'method_type' => $methodType,
            'method_value' => match ($methodType) {
                'url' => fake()->url(),
                'book' => fake()->title().', page '.fake()->numberBetween(1, 500),
                'steps' => fake()->paragraph(),
            },
        ];
    }
}
