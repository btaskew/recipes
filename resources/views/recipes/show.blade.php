<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ $recipe->name }} - {{ config('app.name', 'Recipes') }}</title>

    @fonts
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-200">
    <header class="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex justify-between items-center">
                <a
                    href="{{ route('home') }}"
                    class="text-2xl font-bold text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
                >
                    Recipe Finder
                </a>
            </div>
        </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article class="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div class="p-8 sm:p-12">
                <header class="mb-10">
                    <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                        {{ $recipe->name }}
                    </h1>
                    <div class="flex items-center space-x-4">
                        @foreach($recipe->tags as $tag)
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400 border border-orange-200 dark:border-orange-800">
                                {{ $tag->name }}
                            </span>
                        @endforeach
                    </div>
                </header>

                <div class="grid md:grid-cols-3 gap-12 items-start">
                    <section class="md:col-span-1">
                        <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 border-b border-orange-200 dark:border-orange-800 pb-2">
                            Ingredients
                        </h2>
                        <ul class="space-y-4">
                            @foreach($recipe->ingredients as $ingredient)
                                <li class="flex flex-col">
                                    <span class="font-medium text-gray-900 dark:text-gray-100">{{ $ingredient->name }}</span>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">{{ $ingredient->pivot->quantity }}</span>
                                </li>
                            @endforeach
                        </ul>
                    </section>

                    <section class="md:col-span-2">
                        <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 border-b border-orange-200 dark:border-orange-800 pb-2">
                            Method
                        </h2>
                        <div class="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 whitespace-pre-line">@if($recipe->method_type === 'url')<a href="{{ $recipe->method_value }}" target="_blank" rel="noopener noreferrer" class="text-orange-600 dark:text-orange-500 hover:underline">{{ $recipe->method_value }}</a>@else{{ $recipe->method_value }}@endif</div>
                    </section>
                </div>
            </div>
        </article>
    </main>
</body>
</html>
