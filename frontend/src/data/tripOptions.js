const tripOptions = {
  Goa: {
    attractions: [
      "🏖️ Baga Beach",
      "🏖️ Calangute Beach",
      "🏰 Fort Aguada",
      "🏰 Chapora Fort",
      "🌴 Anjuna Beach",
      "🌅 Vagator Beach",
    ],

    food: [
      "🐟 Goan Fish Curry",
      "🍤 Prawn Balchão",
      "🍗 Chicken Xacuti",
      "🍰 Bebinca",
      "🍛 Goan Prawn Curry",
    ],

    experiences: [
      "🌊 Water Sports",
      "🤿 Scuba Diving",
      "🛥️ Sunset Cruise",
      "🛍️ Anjuna Flea Market",
      "🏡 Local Goan Cooking Experience",
    ],

    nature: [
      "🌴 Palolem Beach",
      "🌿 Butterfly Beach",
      "🌊 Dudhsagar Falls",
      "🌅 Sunset at Vagator",
    ],
  },

  Manali: {
    attractions: [
      "🏔️ Solang Valley",
      "🏔️ Rohtang Pass",
      "🏛️ Hadimba Temple",
      "🌲 Old Manali",
      "💦 Jogini Falls",
    ],

    food: [
      "🥟 Momos",
      "🍜 Thukpa",
      "🥘 Siddu",
      "🍛 Himachali Dham",
    ],

    experiences: [
      "🏂 Snow Activities",
      "🪂 Paragliding",
      "🚣 River Rafting",
      "🥾 Trekking",
      "🏡 Local Himachali Food Experience",
    ],

    nature: [
      "🌲 Solang Valley",
      "💦 Jogini Falls",
      "🏔️ Rohtang Pass",
      "🌿 Vashisht Village",
    ],
  },

  Kerala: {
    attractions: [
      "🚤 Alleppey Backwaters",
      "🌴 Munnar",
      "🏖️ Kovalam Beach",
      "🌿 Wayanad",
      "🛕 Fort Kochi",
    ],

    food: [
      "🍛 Kerala Sadya",
      "🐟 Kerala Fish Curry",
      "🥞 Appam & Stew",
      "🍤 Karimeen Pollichathu",
    ],

    experiences: [
      "🚤 Houseboat Ride",
      "💆 Ayurvedic Experience",
      "🥥 Coconut Farm Visit",
      "🏡 Traditional Kerala Cooking Experience",
    ],

    nature: [
      "🌿 Tea Gardens",
      "💦 Athirappilly Falls",
      "🌴 Backwaters",
      "🐘 Wildlife Experience",
    ],
  },

  Jaipur: {
    attractions: [
      "🏰 Amber Fort",
      "🏛️ City Palace",
      "🕌 Hawa Mahal",
      "🔭 Jantar Mantar",
      "🏯 Jaigarh Fort",
    ],

    food: [
      "🍛 Dal Baati Churma",
      "🥟 Pyaaz Kachori",
      "🍰 Ghewar",
      "🥛 Lassi",
    ],

    experiences: [
      "🐪 Desert Experience",
      "🛍️ Johari Bazaar",
      "🎨 Block Printing Workshop",
      "🏡 Rajasthani Home Dining Experience",
    ],

    nature: [
      "🌿 Central Park",
      "🌅 Nahargarh Sunset",
      "🌳 Ram Niwas Garden",
    ],
  },

  Hyderabad: {
    attractions: [
      "🏰 Golconda Fort",
      "🕌 Charminar",
      "🏛️ Chowmahalla Palace",
      "🛍️ Laad Bazaar",
      "🌊 Hussain Sagar Lake",
    ],

    food: [
      "🍚 Hyderabadi Biryani",
      "🥘 Haleem",
      "🍖 Kebabs",
      "🍮 Double Ka Meetha",
    ],

    experiences: [
      "🍴 Food Walk",
      "🛍️ Local Market Experience",
      "🏡 Traditional Hyderabadi Home Food",
      "🌅 Hussain Sagar Sunset",
    ],

    nature: [
      "🌊 Hussain Sagar",
      "🌳 KBR National Park",
      "🌿 Botanical Garden",
    ],
  },

  Bengaluru: {
    attractions: [
      "🏰 Bangalore Palace",
      "🌳 Cubbon Park",
      "🌺 Lalbagh",
      "🏛️ Vidhana Soudha",
      "🛍️ Commercial Street",
    ],

    food: [
      "🥞 Masala Dosa",
      "🍛 Bisi Bele Bath",
      "☕ South Indian Filter Coffee",
      "🍚 Idli & Vada",
    ],

    experiences: [
      "☕ Café Hopping",
      "🎨 Art & Culture Walk",
      "🏡 Local Home Dining Experience",
      "🛍️ Shopping Experience",
    ],

    nature: [
      "🌳 Cubbon Park",
      "🌺 Lalbagh",
      "🌿 Bannerghatta",
      "🏞️ Nandi Hills",
    ],
  },

  Varanasi: {
    attractions: [
      "🛕 Kashi Vishwanath Temple",
      "🌊 Dashashwamedh Ghat",
      "🌅 Assi Ghat",
      "🛶 Ganges Boat Ride",
      "🛕 Sarnath",
    ],

    food: [
      "🥘 Kachori Sabzi",
      "🍵 Banarasi Chai",
      "🍬 Jalebi",
      "🥛 Lassi",
    ],

    experiences: [
      "🪔 Ganga Aarti",
      "🛶 Sunrise Boat Ride",
      "🏡 Traditional Home Food Experience",
      "🎨 Banarasi Silk Experience",
    ],

    nature: [
      "🌅 Ganges Sunrise",
      "🛶 River Experience",
      "🌿 Sarnath",
    ],
  },

  Mysuru: {
    attractions: [
      "🏰 Mysore Palace",
      "🌿 Brindavan Gardens",
      "🛕 Chamundeshwari Temple",
      "🏛️ Jaganmohan Palace",
    ],

    food: [
      "🥞 Mysore Masala Dosa",
      "🍰 Mysore Pak",
      "🍛 South Indian Thali",
      "☕ Filter Coffee",
    ],

    experiences: [
      "🏡 Traditional Mysuru Home Experience",
      "🎨 Silk & Handicraft Experience",
      "🛍️ Devaraja Market",
      "📸 Palace Photography",
    ],

    nature: [
      "🌿 Brindavan Gardens",
      "🏞️ Chamundi Hills",
      "🌳 Karanji Lake",
    ],
  },
};

export default tripOptions;