<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name', 'Recipes') }}</title>

        @fonts
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-200">
        <header class="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div class="flex justify-between items-center">
                    <h1 class="text-2xl font-bold text-orange-600 dark:text-orange-500">Recipe Finder</h1>
                    <a
                        href="{{ route('recipes.create') }}"
                        class="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                    >
                        Add Recipe
                    </a>
                </div>
            </div>
        </header>

        <main>
            <livewire:recipe-search />
        </main>
    </body>
</html>
