<template>
  <div class="min-h-screen bg-black text-white overflow-hidden">
    <!-- Hero Section with Fire Animation -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&q=80" 
          alt="Gourmet Burger"
          class="w-full h-full object-cover opacity-40"
        />
        <div class="absolute inset-0 bg-linear-to-b from-black via-transparent to-black"></div>
      </div>

      <!-- Animated Fire Particles -->
      <div class="absolute inset-0 z-10 pointer-events-none">
        <div v-for="i in 40" :key="i" 
             class="fire-particle"
             :style="{
               left: `${Math.random() * 100}%`,
               animationDelay: `${Math.random() * 3}s`,
               animationDuration: `${3 + Math.random() * 4}s`
             }">
          🔥
        </div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <h1 class="text-7xl md:text-9xl font-black mb-6 tracking-tight">
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-pulse">
            GORDON RAMSAY
          </span>
          <span class="block text-white drop-shadow-2xl">BURGER</span>
        </h1>
        <p class="text-2xl md:text-4xl font-bold text-red-500 mb-4 tracking-widest">
          PLANET HOLLYWOOD
        </p>
        <p class="text-xl md:text-2xl text-gray-300 mb-12 font-light">
          📍 Phnom Penh, Cambodia
        </p>
        <button class="group relative px-12 py-5 text-xl font-bold text-white bg-gradient-to-r from-red-600 to-orange-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50">
          <span class="relative z-10">RESERVE YOUR TABLE NOW</span>
          <div class="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div class="w-8 h-12 border-2 border-red-500 rounded-full flex justify-center">
          <div class="w-2 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- Gordon Ramsay Feature Section -->
    <section class="relative py-32 px-4 bg-gradient-to-b from-black via-red-950/30 to-black">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="relative group order-2 md:order-1">
            <div class="absolute -inset-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity"></div>
            <img 
              src="https://news3lv.com/resources/media/49f33ff3-910d-49dc-afc4-bb3d5bd4b525-GordonRamsayBurgeratFlamingoLasVegas_GrandOpening_GordonRamsay_DSC_1392.JPG" 
              alt="Gordon Ramsay with Burger"
              class="relative rounded-3xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500 border-4 border-red-500/50"
            />
            <div class="absolute top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-full font-black text-lg shadow-2xl">
              CHEF'S SPECIAL
            </div>
          </div>
          <div class="order-1 md:order-2">
            <h2 class="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span class="text-white">MEET THE</span>
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">LEGENDARY CHEF</span>
            </h2>
            <p class="text-2xl text-gray-300 mb-6 leading-relaxed font-light">
              Gordon Ramsay, the world's most celebrated chef with <span class="text-red-500 font-bold">7 Michelin stars</span> and over <span class="text-red-500 font-bold">35 restaurants worldwide</span>, brings his burger mastery to Phnom Penh.
            </p>
            <p class="text-xl text-gray-400 mb-8 leading-relaxed">
              Every burger is a testament to his uncompromising standards and passion for perfection. From carefully sourced premium beef to the secret Hell's Kitchen sauce, experience what happens when culinary genius meets classic American comfort food.
            </p>
            <div class="flex gap-6 text-center">
              <div class="flex-1 bg-linear-to-b from-red-900/50 to-black border border-red-500/30 rounded-2xl p-6">
                <p class="text-4xl font-black text-red-500 mb-2">7</p>
                <p class="text-gray-400 text-sm uppercase tracking-wider">Michelin Stars</p>
              </div>
              <div class="flex-1 bg-linear-to-b from-orange-900/50 to-black border border-orange-500/30 rounded-2xl p-6">
                <p class="text-4xl font-black text-orange-500 mb-2">35+</p>
                <p class="text-gray-400 text-sm uppercase tracking-wider">Restaurants</p>
              </div>
              <div class="flex-1 bg-linear-to-b from-yellow-900/50 to-black border border-yellow-500/30 rounded-2xl p-6">
                <p class="text-4xl font-black text-yellow-500 mb-2">100M+</p>
                <p class="text-gray-400 text-sm uppercase tracking-wider">Fans Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Signature Story Section -->
    <section class="relative py-32 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500">
            THE BURGER STORY
          </h2>
          <p class="text-2xl text-gray-300 max-w-3xl mx-auto">
            A journey from Hell's Kitchen to your plate
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-10 mb-20">
          <div class="relative group">
            <div class="absolute -inset-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
            <div class="relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border-2 border-red-500/30 h-full">
              <div class="text-6xl mb-6">🥩</div>
              <h3 class="text-3xl font-black mb-4 text-red-500">PREMIUM INGREDIENTS</h3>
              <p class="text-gray-400 leading-relaxed">
                Only the finest 100% Angus beef, freshly ground daily. Locally sourced vegetables and artisan buns baked fresh every morning. No compromises, ever.
              </p>
            </div>
          </div>

          <div class="relative group">
            <div class="absolute -inset-2 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
            <div class="relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border-2 border-orange-500/30 h-full">
              <div class="text-6xl mb-6">🔥</div>
              <h3 class="text-3xl font-black mb-4 text-orange-500">CHEF'S TECHNIQUE</h3>
              <p class="text-gray-400 leading-relaxed">
                Each patty is seared at 800°F for that perfect crust, then finished to your exact specification. The Gordon Ramsay method ensures maximum flavor and juiciness.
              </p>
            </div>
          </div>

          <div class="relative group">
            <div class="absolute -inset-2 bg-gradient-to-r from-yellow-600 to-red-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
            <div class="relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border-2 border-yellow-500/30 h-full">
              <div class="text-6xl mb-6">⭐</div>
              <h3 class="text-3xl font-black mb-4 text-yellow-500">SIGNATURE FLAVOR</h3>
              <p class="text-gray-400 leading-relaxed">
                Secret house-made sauces, aged cheddar, and perfectly caramelized onions. Every element is crafted to create burger perfection that will blow your mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu Highlights - Extended -->
    <section class="relative py-32 px-4 bg-gradient-to-b from-black via-orange-950/20 to-black">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-6xl md:text-7xl font-black text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500">
          SIGNATURE BURGERS
        </h2>
        <p class="text-2xl text-gray-300 text-center mb-20 max-w-3xl mx-auto">
          Hand-crafted masterpieces that define burger excellence
        </p>
        
        <div class="grid md:grid-cols-3 gap-10 mb-16">
          <!-- Burger 1 -->
          <div class="group relative bg-gradient-to-b from-gray-900 to-black rounded-3xl overflow-hidden border-2 border-red-500/30 hover:border-red-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
            <div class="absolute top-4 right-4 z-10 bg-red-600 text-white px-4 py-2 rounded-full font-black text-sm shadow-xl">
              BEST SELLER
            </div>
            <div class="relative h-72 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&q=80" 
                alt="Hell's Kitchen Burger"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            <div class="p-8">
              <h3 class="text-3xl font-black mb-3 text-red-500">HELL'S KITCHEN BURGER</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">
                8oz Angus beef, roasted jalapeños, pepper jack cheese, chipotle aioli, crispy onion rings, arugula on brioche bun
              </p>
              <div class="flex items-center justify-between">
                <p class="text-3xl font-black text-white">$18.99</p>
                <span class="text-yellow-500 text-xl">🔥🔥🔥</span>
              </div>
            </div>
          </div>

          <!-- Burger 2 -->
          <div class="group relative bg-gradient-to-b from-gray-900 to-black rounded-3xl overflow-hidden border-2 border-orange-500/30 hover:border-orange-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
            <div class="absolute top-4 right-4 z-10 bg-orange-600 text-white px-4 py-2 rounded-full font-black text-sm shadow-xl">
              PREMIUM
            </div>
            <div class="relative h-72 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&q=80" 
                alt="Truffle Burger"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            <div class="p-8">
              <h3 class="text-3xl font-black mb-3 text-orange-500">TRUFFLE ROYALE</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">
                10oz Wagyu beef, black truffle aioli, wild mushroom medley, aged gruyere, caramelized onions, truffle oil drizzle
              </p>
              <div class="flex items-center justify-between">
                <p class="text-3xl font-black text-white">$24.99</p>
                <span class="text-yellow-500 text-xl">⭐⭐⭐</span>
              </div>
            </div>
          </div>

          <!-- Burger 3 -->
          <div class="group relative bg-gradient-to-b from-gray-900 to-black rounded-3xl overflow-hidden border-2 border-yellow-500/30 hover:border-yellow-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50">
            <div class="absolute top-4 right-4 z-10 bg-yellow-600 text-black px-4 py-2 rounded-full font-black text-sm shadow-xl">
              CLASSIC
            </div>
            <div class="relative h-72 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=600&q=80" 
                alt="American Burger"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            <div class="p-8">
              <h3 class="text-3xl font-black mb-3 text-yellow-500">AMERICAN CLASSIC</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">
                8oz prime beef, aged cheddar, applewood bacon, iceberg lettuce, beef tomato, house special sauce, pickles
              </p>
              <div class="flex items-center justify-between">
                <p class="text-3xl font-black text-white">$16.99</p>
                <span class="text-yellow-500 text-xl">🍔🍔🍔</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Row -->
        <div class="grid md:grid-cols-3 gap-10">
          <!-- Burger 4 -->
          <div class="group relative bg-gradient-to-b from-gray-900 to-black rounded-3xl overflow-hidden border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <div class="relative h-72 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80" 
                alt="BBQ Burger"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            <div class="p-8">
              <h3 class="text-3xl font-black mb-3 text-purple-500">SMOKEY BBQ BEAST</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">
                8oz beef, pulled pork, BBQ sauce, coleslaw, cheddar, bacon, onion rings, smoky mayo
              </p>
              <div class="flex items-center justify-between">
                <p class="text-3xl font-black text-white">$19.99</p>
                <span class="text-yellow-500 text-xl">🔥🥓</span>
              </div>
            </div>
          </div>

          <!-- Burger 5 -->
          <div class="group relative bg-gradient-to-b from-gray-900 to-black rounded-3xl overflow-hidden border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
            <div class="relative h-72 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&q=80" 
                alt="Blue Cheese Burger"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            <div class="p-8">
              <h3 class="text-3xl font-black mb-3 text-blue-500">BLUE CHEESE DELUXE</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">
                10oz Angus beef, Danish blue cheese, caramelized onions, fig jam, arugula, balsamic glaze
              </p>
              <div class="flex items-center justify-between">
                <p class="text-3xl font-black text-white">$21.99</p>
                <span class="text-yellow-500 text-xl">🧀💙</span>
              </div>
            </div>
          </div>

          <!-- Burger 6 -->
          <div class="group relative bg-gradient-to-b from-gray-900 to-black rounded-3xl overflow-hidden border-2 border-green-500/30 hover:border-green-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50">
            <div class="absolute top-4 right-4 z-10 bg-green-600 text-white px-4 py-2 rounded-full font-black text-sm shadow-xl">
              PLANT-BASED
            </div>
            <div class="relative h-72 overflow-hidden">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5O65P1QcC3Zgu3TymML2TN9ddE74Queh8g&s" 
                alt="Veggie Burger"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            <div class="p-8">
              <h3 class="text-3xl font-black mb-3 text-green-500">PLANT POWER</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">
                Impossible patty, vegan cheese, avocado, roasted peppers, greens, chipotle mayo, whole grain bun
              </p>
              <div class="flex items-center justify-between">
                <p class="text-3xl font-black text-white">$17.99</p>
                <span class="text-yellow-500 text-xl">🌱💚</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sides & Drinks Section -->
    <section class="relative py-32 px-4">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-6xl md:text-7xl font-black text-center mb-20 text-white">
          SIDES & <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">BEVERAGES</span>
        </h2>

        <div class="grid md:grid-cols-2 gap-16 mb-20">
          <!-- Sides -->
          <div>
            <h3 class="text-4xl font-black mb-10 text-red-500 flex items-center gap-4">
              <span class="text-5xl">🍟</span>
              SIGNATURE SIDES
            </h3>
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-gray-900 to-black p-6 rounded-2xl border-l-4 border-red-500">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="text-2xl font-bold text-white">Hell's Kitchen Fries</h4>
                  <p class="text-xl font-black text-red-500">$6.99</p>
                </div>
                <p class="text-gray-400">Triple-cooked, seasoned with Gordon's special blend</p>
              </div>
              <div class="bg-gradient-to-r from-gray-900 to-black p-6 rounded-2xl border-l-4 border-orange-500">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="text-2xl font-bold text-white">Truffle Parmesan Fries</h4>
                  <p class="text-xl font-black text-orange-500">$8.99</p>
                </div>
                <p class="text-gray-400">Topped with truffle oil and fresh parmesan</p>
              </div>
              <div class="bg-gradient-to-r from-gray-900 to-black p-6 rounded-2xl border-l-4 border-yellow-500">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="text-2xl font-bold text-white">Sweet Potato Fries</h4>
                  <p class="text-xl font-black text-yellow-500">$7.99</p>
                </div>
                <p class="text-gray-400">Crispy sweet potato with chipotle mayo</p>
              </div>
              <div class="bg-gradient-to-r from-gray-900 to-black p-6 rounded-2xl border-l-4 border-purple-500">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="text-2xl font-bold text-white">Onion Rings</h4>
                  <p class="text-xl font-black text-purple-500">$7.99</p>
                </div>
                <p class="text-gray-400">Beer-battered, served with ranch</p>
              </div>
            </div>
          </div>

          <!-- Drinks -->
          <div>
            <h3 class="text-4xl font-black mb-10 text-orange-500 flex items-center gap-4">
              <span class="text-5xl">🥤</span>
              PREMIUM DRINKS
            </h3>
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-gray-900 to-black p-6 rounded-2xl border-l-4 border-red-500">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="text-2xl font-bold text-white">Hell's Kitchen Shake</h4>
                  <p class="text-xl font-black text-red-500">$9.99</p>
                </div>
                <p class="text-gray-400">Vanilla, chocolate, or strawberry with whipped cream</p>
              </div>
              <div class="bg-gradient-to-r from-gray-900 to-black p-6 rounded-2xl border-l-4 border-orange-500">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="text-2xl font-bold text-white">Craft Sodas</h4>
                  <p class="text-xl font-black text-orange-500">$4.99</p>
                </div>
                <p class="text-gray-400">Root beer, ginger ale, cream soda</p>
              </div>
              <div class="bg-gradient-to-r from-gray-900 to-black p-6 rounded-2xl border-l-4 border-yellow-500">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="text-2xl font-bold text-white">Fresh Lemonade</h4>
                  <p class="text-xl font-black text-yellow-500">$5.99</p>
                </div>
                <p class="text-gray-400">House-made with real lemons</p>
              </div>
              <div class="bg-gradient-to-r from-gray-900 to-black p-6 rounded-2xl border-l-4 border-blue-500">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="text-2xl font-bold text-white">Iced Coffee</h4>
                  <p class="text-xl font-black text-blue-500">$5.99</p>
                </div>
                <p class="text-gray-400">Cold brew with vanilla or caramel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="relative py-32 px-4 bg-gradient-to-b from-black via-orange-950/20 to-black">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-6xl md:text-7xl font-black text-center mb-20 text-white">
          FOOD <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">GALLERY</span>
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div class="group relative overflow-hidden rounded-2xl aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80" 
              alt="Burger close-up"
              class="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-red-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
              <p class="text-white font-black text-xl">Perfect Patty</p>
            </div>
          </div>
          <div class="group relative overflow-hidden rounded-2xl aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" 
              alt="Fries"
              class="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
              <p class="text-white font-black text-xl">Crispy Fries</p>
            </div>
          </div>
          <div class="group relative overflow-hidden rounded-2xl aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80" 
              alt="Milkshake"
              class="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-yellow-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
              <p class="text-white font-black text-xl">Thick Shakes</p>
            </div>
          </div>
          <div class="group relative overflow-hidden rounded-2xl aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&q=80" 
              alt="Restaurant interior"
              class="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-red-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
              <p class="text-white font-black text-xl">Dining Experience</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="group relative overflow-hidden rounded-2xl aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=600&q=80" 
              alt="Bacon Burger"
              class="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
              <p class="text-white font-black text-xl">Loaded Burgers</p>
            </div>
          </div>
          <div class="group relative overflow-hidden rounded-2xl aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80" 
              alt="Kitchen"
              class="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
              <p class="text-white font-black text-xl">Open Kitchen</p>
            </div>
          </div>
          <div class="group relative overflow-hidden rounded-2xl aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=600&q=80" 
              alt="Premium ingredients"
              class="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
              <p class="text-white font-black text-xl">Fresh Daily</p>
            </div>
          </div>
          <div class="group relative overflow-hidden rounded-2xl aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?w=600&q=80" 
              alt="Chef cooking"
              class="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-pink-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
              <p class="text-white font-black text-xl">Master Chefs</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="relative py-32 px-4">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-6xl md:text-7xl font-black text-center mb-8 text-white">
          WHAT PEOPLE <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">ARE SAYING</span>
        </h2>
        <p class="text-2xl text-gray-300 text-center mb-20">Rated 4.9/5 by over 10,000+ burger lovers</p>

        <div class="grid md:grid-cols-3 gap-10">
          <div class="bg-gradient-to-b from-gray-900 to-black p-8 rounded-3xl border-2 border-red-500/30 hover:border-red-500 transition-all duration-300 hover:scale-105">
            <div class="flex gap-2 mb-6">
              <span class="text-3xl">⭐</span>
              <span class="text-3xl">⭐</span>
              <span class="text-3xl">⭐</span>
              <span class="text-3xl">⭐</span>
              <span class="text-3xl">⭐</span>
            </div>
            <p class="text-xl text-gray-300 mb-6 leading-relaxed">
              "Absolutely mind-blowing! The Hell's Kitchen burger is fire - literally and figuratively. Best burger I've ever had in Southeast Asia!"
            </p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-2xl font-black">
                S
              </div>
              <div>
                <p class="font-bold text-white">Sarah Johnson</p>
                <p class="text-sm text-gray-500">Food Blogger</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-b from-gray-900 to-black p-8 rounded-3xl border-2 border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:scale-105">
            <div class="flex gap-2 mb-6">
              <span class="text-3xl">⭐</span>
              <span class="text-3xl">⭐</span>
              <span class="text-3xl">⭐</span>
              <span class="text-3xl">⭐</span>
              <span class="text-3xl">⭐</span>
            </div>
            <p class="text-xl text-gray-300 mb-6 leading-relaxed">
              "Gordon Ramsay's standards are evident in every bite. The quality is unmatched. Worth every penny and then some!"
            </p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-2xl font-black">
                M
              </div>
              <div>
                <p class="font-bold text-white">Michael Chen</p>
                <p class="text-sm text-gray-500">Restaurant Critic</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-b from-gray-900 to-black p-8 rounded-3xl border-2 border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 hover:scale-105">
            <div class="flex gap-2 mb-6">
              <span class="text-3xl">⭐</span>
              <span class="text-3xl">⭐</span>
              <span class="text-3xl">⭐</span>
              <span class="text-3xl">⭐</span>
              <span class="text-3xl">⭐</span>
            </div>
            <p class="text-xl text-gray-300 mb-6 leading-relaxed">
              "Finally, world-class burgers in Phnom Penh! The ambiance, service, and most importantly the food - all exceptional!"
            </p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center text-2xl font-black">
                L
              </div>
              <div>
                <p class="font-bold text-white">Lisa Martinez</p>
                <p class="text-sm text-gray-500">Travel Influencer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="relative py-32 px-4 bg-linear-to-b from-black via-red-950/20 to-black">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-6xl md:text-7xl font-black text-center mb-20 text-transparent bg-clip-text bg-linear-to-r from-yellow-500 via-red-500 to-orange-500">
          THE FULL EXPERIENCE
        </h2>

        <div class="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div class="relative group">
            <div class="absolute -inset-4 bg-linear-to-r from-red-600 to-orange-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" 
              alt="Restaurant interior"
              class="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
          <div>
            <h3 class="text-4xl font-black mb-6 text-white">PLANET HOLLYWOOD AMBIANCE</h3>
            <p class="text-xl text-gray-300 mb-6 leading-relaxed">
              Step into a world where Hollywood glamour meets culinary excellence. Our Planet Hollywood location features memorabilia from iconic films, creating an unforgettable dining atmosphere.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-4">
                <span class="text-2xl">🎬</span>
                <span class="text-gray-300">Authentic Hollywood movie props and memorabilia</span>
              </li>
              <li class="flex items-start gap-4">
                <span class="text-2xl">🎵</span>
                <span class="text-gray-300">Curated music playlist for the perfect vibe</span>
              </li>
              <li class="flex items-start gap-4">
                <span class="text-2xl">👨‍🍳</span>
                <span class="text-gray-300">Open kitchen to watch our chefs in action</span>
              </li>
              <li class="flex items-start gap-4">
                <span class="text-2xl">🍽️</span>
                <span class="text-gray-300">Premium dining experience with impeccable service</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="order-2 md:order-1">
            <h3 class="text-4xl font-black mb-6 text-white">PRIVATE EVENTS & CATERING</h3>
            <p class="text-xl text-gray-300 mb-6 leading-relaxed">
              Make your special occasion unforgettable with Gordon Ramsay Burger catering. Perfect for corporate events, birthdays, weddings, and private celebrations.
            </p>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-4">
                <span class="text-2xl">🎉</span>
                <span class="text-gray-300">Customized menu planning</span>
              </li>
              <li class="flex items-start gap-4">
                <span class="text-2xl">👥</span>
                <span class="text-gray-300">Groups from 20 to 200 people</span>
              </li>
              <li class="flex items-start gap-4">
                <span class="text-2xl">📋</span>
                <span class="text-gray-300">Dedicated event coordinator</span>
              </li>
            </ul>
            <button class="px-8 py-4 bg-linear-to-r from-red-600 to-orange-600 rounded-full font-bold text-lg hover:scale-105 transition-transform">
              INQUIRE ABOUT EVENTS
            </button>
          </div>
          <div class="relative group order-1 md:order-2">
            <div class="absolute -inset-4 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80" 
              alt="Private dining"
              class="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Location Section -->
    <section class="relative py-32 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-5xl md:text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
              FIND US IN PHNOM PENH
            </h2>
            <div class="space-y-6 text-xl text-gray-300 mb-10">
              <p class="flex items-center gap-4">
                <span class="text-4xl">📍</span>
                <span>Planet Hollywood, Street 130, Phnom Penh, Cambodia</span>
              </p>
              <p class="flex items-center gap-4">
                <span class="text-4xl">🕐</span>
                <div>
                  <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                  <p>Friday - Sunday: 11:00 AM - 11:00 PM</p>
                </div>
              </p>
              <p class="flex items-center gap-4">
                <span class="text-4xl">📞</span>
                <span>+855 23 456 789</span>
              </p>
              <p class="flex items-center gap-4">
                <span class="text-4xl">✉️</span>
                <span>reservations@ramsayburger-pp.com</span>
              </p>
            </div>
            
            <div class="bg-linear-to-r from-gray-900 to-black p-8 rounded-3xl border-2 border-red-500/30">
              <h3 class="text-2xl font-black mb-4 text-red-500">RESERVATION TIPS</h3>
              <ul class="space-y-3 text-gray-300">
                <li>• Book in advance for weekend dining</li>
                <li>• Walk-ins welcome for lunch hours</li>
                <li>• Special occasions? Let us know!</li>
                <li>• VIP seating available for groups of 8+</li>
              </ul>
            </div>
          </div>
          <div class="relative group">
            <div class="absolute -inset-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80" 
              alt="Restaurant location"
              class="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Special Offers Section -->
    <section class="relative py-32 px-4 bg-gradient-to-b from-black via-orange-950/30 to-black">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-6xl md:text-7xl font-black text-center mb-20 text-white">
          SPECIAL <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">OFFERS</span>
        </h2>

        <div class="grid md:grid-cols-2 gap-10">
          <div class="relative group overflow-hidden rounded-3xl">
            <div class="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-90"></div>
            <div class="relative p-12">
              <div class="text-6xl mb-6">🍔</div>
              <h3 class="text-4xl font-black mb-4 text-white">LUNCH SPECIAL</h3>
              <p class="text-2xl text-white mb-6">Monday - Friday, 11AM - 3PM</p>
              <p class="text-xl text-white/90 mb-8">
                Any burger + fries + soft drink for just <span class="text-4xl font-black">$19.99</span>
              </p>
              <div class="inline-block bg-white text-red-600 px-6 py-3 rounded-full font-black">
                SAVE $7!
              </div>
            </div>
          </div>

          <div class="relative group overflow-hidden rounded-3xl">
            <div class="absolute inset-0 bg-gradient-to-r from-yellow-600 to-red-600 opacity-90"></div>
            <div class="relative p-12">
              <div class="text-6xl mb-6">🎉</div>
              <h3 class="text-4xl font-black mb-4 text-white">HAPPY HOUR</h3>
              <p class="text-2xl text-white mb-6">Every Day, 3PM - 6PM</p>
              <p class="text-xl text-white/90 mb-8">
                <span class="text-4xl font-black">50% OFF</span> on all milkshakes and selected appetizers
              </p>
              <div class="inline-block bg-white text-yellow-600 px-6 py-3 rounded-full font-black">
                LIMITED TIME!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-32 px-4 bg-linear-to-b from-black to-red-950">
      <div class="max-w-4xl mx-auto text-center">
        <div class="text-8xl mb-8">🔥</div>
        <h2 class="text-6xl md:text-7xl font-black mb-8 text-white">
          READY TO <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">IGNITE</span> YOUR TASTE BUDS?
        </h2>
        <p class="text-2xl text-gray-300 mb-12 leading-relaxed">
          Don't just take our word for it. Experience the legendary Gordon Ramsay burger perfection yourself. Book your table now!
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button class="group relative px-16 py-6 text-2xl font-bold text-white bg-gradient-to-r from-red-600 to-orange-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50">
            <span class="relative z-10">BOOK YOUR TABLE</span>
            <div class="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button class="px-16 py-6 text-2xl font-bold text-white border-4 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
            VIEW FULL MENU
          </button>
        </div>
        
        <div class="mt-16 flex justify-center gap-8 text-gray-400">
          <a href="#" class="hover:text-red-500 transition-colors">
            <span class="text-4xl">📘</span>
          </a>
          <a href="#" class="hover:text-red-500 transition-colors">
            <span class="text-4xl">📷</span>
          </a>
          <a href="#" class="hover:text-red-500 transition-colors">
            <span class="text-4xl">🐦</span>
          </a>
          <a href="#" class="hover:text-red-500 transition-colors">
            <span class="text-4xl">▶️</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black border-t border-red-900/30 py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 class="text-2xl font-black mb-6 text-red-500">GORDON RAMSAY BURGER</h4>
            <p class="text-gray-400 leading-relaxed">
              World-class burgers by the legendary Chef Gordon Ramsay, now in Phnom Penh.
            </p>
          </div>
          <div>
            <h5 class="text-lg font-bold mb-4 text-white">QUICK LINKS</h5>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-red-500 transition-colors">Menu</a></li>
              <li><a href="#" class="hover:text-red-500 transition-colors">Reservations</a></li>
              <li><a href="#" class="hover:text-red-500 transition-colors">Events</a></li>
              <li><a href="#" class="hover:text-red-500 transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h5 class="text-lg font-bold mb-4 text-white">CONTACT</h5>
            <ul class="space-y-2 text-gray-400">
              <li>+855 23 456 789</li>
              <li>info@ramsayburger-pp.com</li>
              <li>Planet Hollywood</li>
              <li>Phnom Penh, Cambodia</li>
            </ul>
          </div>
          <div>
            <h5 class="text-lg font-bold mb-4 text-white">HOURS</h5>
            <ul class="space-y-2 text-gray-400">
              <li>Mon-Thu: 11AM - 10PM</li>
              <li>Fri-Sun: 11AM - 11PM</li>
              <li className="text-red-500 font-bold mt-4">Open Daily!</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-8 text-center">
          <p class="text-gray-500 text-lg mb-4">
            © 2024 Gordon Ramsay Burger | Planet Hollywood Phnom Penh
          </p>
          <p class="text-gray-600">
            Part of the Gordon Ramsay Restaurants family
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Fire animation and interactive elements
</script>

<style scoped>
@keyframes fireRise {
  0% {
    transform: translateY(100vh) scale(0.5) rotate(0deg);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
    transform: translateY(50vh) scale(1) rotate(180deg);
  }
  100% {
    transform: translateY(-20vh) scale(1.5) rotate(360deg);
    opacity: 0;
  }
}

.fire-particle {
  position: absolute;
  font-size: 2rem;
  animation: fireRise linear infinite;
  pointer-events: none;
  filter: drop-shadow(0 0 10px rgba(255, 69, 0, 0.8));
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

html {
  scroll-behavior: smooth;
}

@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>