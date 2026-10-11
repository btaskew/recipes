<?php

use App\Models\Recipe;
use Livewire\Attributes\Url;
use Livewire\Component;
use Livewire\WithPagination;

new class extends Component
{
    use WithPagination;

    #[Url]
    public string $search = '';

    public function updatedSearch(): void
    {
        $this->resetPage();
    }

    protected function recipes()
    {
        return Recipe::query()
            ->when($this->search, fn ($query) => $query->where('name', 'like', "%{$this->search}%"))
            ->latest()
            ->paginate(5);
    }
};
?>

<div class="w-full max-w-4xl mx-auto p-6">
    <div class="flex flex-col items-center justify-center space-y-8">
        <div class="w-full max-w-md">
            <label for="search" class="sr-only">Search recipes</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
                <input
                    wire:model.live.debounce.300ms="search"
                    type="text"
                    id="search"
                    class="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-xl leading-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm shadow-sm transition duration-150 ease-in-out"
                    placeholder="Search recipes..."
                >
            </div>
        </div>

        <div class="w-full space-y-4">
            @php($recipes = $this->recipes())

            @if($recipes->isEmpty())
                <div class="text-center py-12">
                    <p class="text-gray-500 dark:text-gray-400 text-lg">No recipes found matching your search.</p>
                </div>
            @else
                <div class="grid gap-6">
                    @foreach($recipes as $recipe)
                        <a
                            href="{{ route('recipes.show', $recipe) }}"
                            wire:key="{{ $recipe->id }}"
                            class="block bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md hover:border-orange-200 dark:hover:border-orange-900 transition-all duration-200 group"
                        >
                            <div class="flex justify-between items-start">
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-orange-500 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{{ $recipe->name }}</h3>
                                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ $recipe->method_type }}</p>
                                </div>
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400 border border-orange-200 dark:border-orange-800 transition-colors">
                                            Recipe
                                        </span>
                            </div>
                            <div class="mt-4">
                                <p class="text-gray-600 dark:text-gray-300 line-clamp-2">{{ $recipe->method_value }}</p>
                            </div>
                        </a>
                    @endforeach
                </div>

                <div class="mt-8">
                    {{ $recipes->links() }}
                </div>
            @endif
        </div>
    </div>
</div>
