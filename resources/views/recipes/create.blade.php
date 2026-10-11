<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Add Recipe - {{ config('app.name', 'Recipes') }}</title>

        @fonts
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-200">
        <header class="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div class="flex justify-between items-center">
                    <a href="{{ route('home') }}" class="text-2xl font-bold text-orange-600 dark:text-orange-500">Recipe Finder</a>
                </div>
            </div>
        </header>

        <main class="py-12">
            <livewire:create-recipe />
        </main>
    </body>
</html>
