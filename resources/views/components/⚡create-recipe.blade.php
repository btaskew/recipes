<?php

use App\Models\Recipe;
use App\Models\Ingredient;
use Livewire\Component;
use Illuminate\Validation\Rule;
use Illuminate\Support\Collection;

new class extends Component
{
    public string $name = '';
    public string $method_type = '';
    public string $method_value = '';

    public string $ingredientSearch = '';
    public array $addedIngredients = [];

    protected function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'method_type' => ['required', Rule::in(['url', 'book', 'steps'])],
            'method_value' => ['required', 'string'],
            'addedIngredients' => ['array'],
            'addedIngredients.*.name' => ['required', 'string'],
            'addedIngredients.*.quantity' => ['nullable', 'string'],
        ];
    }

    public function getIngredientsProperty(): Collection
    {
        if (strlen($this->ingredientSearch) < 2) {
            return collect();
        }

        return Ingredient::where('name', 'like', "%{$this->ingredientSearch}%")
            ->limit(5)
            ->get();
    }

    public function addIngredient(string $name): void
    {
        $name = trim($name);

        if (empty($name)) {
            return;
        }

        foreach ($this->addedIngredients as $ingredient) {
            if (strtolower($ingredient['name']) === strtolower($name)) {
                $this->ingredientSearch = '';

                return;
            }
        }

        $this->addedIngredients[] = [
            'name' => $name,
            'quantity' => '',
        ];

        $this->ingredientSearch = '';
    }

    public function removeIngredient(int $index): void
    {
        unset($this->addedIngredients[$index]);
        $this->addedIngredients = array_values($this->addedIngredients);
    }

    public function save()
    {
        $this->validate();

        $recipe = Recipe::create([
            'name' => $this->name,
            'method_type' => $this->method_type,
            'method_value' => $this->method_value,
        ]);

        foreach ($this->addedIngredients as $item) {
            $ingredient = Ingredient::firstOrCreate(['name' => $item['name']]);
            $recipe->ingredients()->attach($ingredient->id, ['quantity' => $item['quantity']]);
        }

        return redirect()->to(route('home'));
    }
};
?>

<div class="w-full max-w-2xl mx-auto p-6">
    <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-8">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Add New Recipe</h2>

        <form wire:submit="save" class="space-y-6">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Recipe Name</label>
                <input
                    wire:model="name"
                    type="text"
                    id="name"
                    class="block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm shadow-sm transition duration-150"
                    placeholder="e.g. Grandma's Apple Pie"
                >
                @error('name') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="method_type" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Recipe Type</label>
                <select
                    wire:model.live="method_type"
                    id="method_type"
                    class="block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm shadow-sm transition duration-150"
                >
                    <option value="">Select a type</option>
                    <option value="url">Website URL</option>
                    <option value="book">Cookbook Reference</option>
                    <option value="steps">Written Steps</option>
                </select>
                @error('method_type') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
            </div>

            @if($method_type === 'url')
                <div>
                    <label for="method_value" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">URL</label>
                    <input
                        wire:model="method_value"
                        type="url"
                        id="method_value"
                        class="block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm shadow-sm transition duration-150"
                        placeholder="https://example.com/recipe"
                    >
                    @error('method_value') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
                </div>
            @elseif($method_type === 'book')
                <div>
                    <label for="method_value" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Book Details</label>
                    <input
                        wire:model="method_value"
                        type="text"
                        id="method_value"
                        class="block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm shadow-sm transition duration-150"
                        placeholder="e.g. The Joy of Cooking, Page 123"
                    >
                    @error('method_value') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
                </div>
            @elseif($method_type === 'steps')
                <div>
                    <label for="method_value" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Steps</label>
                    <textarea
                        wire:model="method_value"
                        id="method_value"
                        rows="6"
                        class="block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm shadow-sm transition duration-150"
                        placeholder="Enter the recipe steps..."
                    ></textarea>
                    @error('method_value') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
                </div>
            @endif

            <hr class="border-gray-100 dark:border-gray-800">

            <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Ingredients</h3>

                <div class="relative">
                    <label for="ingredientSearch" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Add Ingredient</label>
                    <div class="flex gap-2">
                        <input
                            wire:model.live.debounce.300ms="ingredientSearch"
                            type="text"
                            id="ingredientSearch"
                            class="block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm shadow-sm transition duration-150"
                            placeholder="Type to search or add new..."
                            wire:keydown.enter.prevent="addIngredient($event.target.value)"
                        >
                        <button
                            type="button"
                            wire:click="addIngredient(ingredientSearch)"
                            class="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl transition-colors"
                        >
                            Add
                        </button>
                    </div>

                    @if($this->ingredients->isNotEmpty())
                        <div class="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg">
                            @foreach($this->ingredients as $ingredient)
                                <button
                                    type="button"
                                    wire:click="addIngredient('{{ $ingredient->name }}')"
                                    class="block w-full text-left px-4 py-2 hover:bg-orange-50 dark:hover:bg-orange-900/20 text-gray-900 dark:text-gray-100 first:rounded-t-xl last:rounded-b-xl"
                                >
                                    {{ $ingredient->name }}
                                </button>
                            @endforeach
                        </div>
                    @endif
                </div>

                <div class="mt-6 space-y-3">
                    @foreach($addedIngredients as $index => $ingredient)
                        <div wire:key="ingredient-{{ $index }}" class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                            <span class="flex-1 font-medium text-gray-900 dark:text-gray-100">{{ $ingredient['name'] }}</span>
                            <input
                                wire:model="addedIngredients.{{ $index }}.quantity"
                                type="text"
                                class="w-32 px-3 py-1 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                placeholder="Quantity"
                            >
                            <button
                                type="button"
                                wire:click="removeIngredient({{ $index }})"
                                class="p-1 text-gray-400 hover:text-red-500 transition-colors"
                            >
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    @endforeach
                </div>
            </div>

            <div class="flex justify-end pt-4">
                <a
                    href="{{ route('home') }}"
                    class="mr-4 px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                    Cancel
                </a>
                <button
                    type="submit"
                    class="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                    Save Recipe
                </button>
            </div>
        </form>
    </div>
</div>
