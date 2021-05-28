const weapons = {
    'alley-hunter': 'boreal-wolfs,ley-line,insignia-1',
    'amos-bow': 'dandelion-gladiator,chaos,slime',
    'blackcliff-warbow': 'guyun,knife,insignia-1',
    'compound-bow': 'aerosiderite,bone-shard,insignia-2',
    //"ebony-bow" : "unknown,unknown,unknown",
    'favonius-warbow': 'dandelion-gladiator,chaos,nectar',
    'hunters-bow': 'boreal-wolfs,ley-line,insignia-1',
    messenger: 'elixir,mist-grass,insignia-1',
    'mitternachts-waltz': 'decarabian,horn,insignia-1',
    'prototype-crescent': 'elixir,mist-grass,insignia-1',
    'raven-bow': 'decarabian,horn,arrowhead',
    'recurve-bow': 'dandelion-gladiator,chaos,scroll',
    'royal-bow': 'dandelion-gladiator,chaos,scroll',
    rust: 'guyun,knife,mask',
    'sacrificial-bow': 'boreal-wolfs,ley-line,slime',
    'seasoned-hunters-bow': 'boreal-wolfs,ley-line,insignia-1',
    'serene-requiem': 'boreal-wolfs,horn,insignia-2',
    'sharpshooters-oath': 'boreal-wolfs,ley-line,slime',
    'skyward-harp': 'boreal-wolfs,ley-line,arrowhead',
    slingshot: 'guyun,knife,mask',
    'the-stringless': 'decarabian,horn,arrowhead',
    'the-viridescent-hunt': 'decarabian,horn,arrowhead',
    //"amber-catalyst" : "unknown,unknown,unknown",
    'apprentices-notes': 'decarabian,horn,mask',
    'blackcliff-agate': 'guyun,knife,scroll',
    'emerald-orb': 'guyun,knife,insignia-1',
    'eye-of-perception': 'elixir,mist-grass,mask',
    'favonius-codex': 'decarabian,horn,scroll',
    frostbearer: 'dandelion-gladiator,chaos,nectar',
    'lost-prayer-to-the-sacred-winds': 'dandelion-gladiator,chaos,slime',
    'magic-guide': 'decarabian,horn,slime',
    'mappa-mare': 'aerosiderite,bone-shard,slime',
    'memory-of-dust': 'aerosiderite,bone-shard,mask',
    'otherworldy-story': 'dandelion-gladiator,chaos,slime',
    'pocket-grimoire': 'decarabian,horn,mask',
    'prototype-malice': 'elixir,mist-grass,arrowhead',
    'royal-grimoire': 'decarabian,horn,insignia',
    'sacrificial-fragments': 'dandelion-gladiator,chaos,insignia-1',
    'skyward-atlas': 'boreal-wolfs,ley-line,arrowhead',
    'solar-pearl': 'guyun,knife,nectar',
    'the-widsith': 'boreal-wolfs,ley-line,mask',
    'thrilling-tales-of-dragon-slayers': 'boreal-wolfs,ley-line,scroll',
    'twin-nephrite': 'elixir,mist-grass,insignia-2',
    'wine-and-song': 'boreal-wolfs,ley-line,scroll',
    'blackcliff-slasher': 'elixir,mist-grass,insignia-2',
    'bloodtained-greatsword': 'boreal-wolfs,ley-line,arrowhead',
    'debate-club': 'elixir,mist-grass,mask',
    'favonius-greatsword': 'dandelion-gladiator,chaos,insignia-2',
    'ferrous-shadow': 'decarabian,horn,nectar',
    'lithic-blade': 'guyun,knife,arrowhead',
    'old-mercs-pal': 'boreal-wolfs,ley-line,slime',
    'prototype-aminus': 'aerosiderite,bone-shard,mask',
    //"quartz" : "unknown,unknown,unknown",
    rainslasher: 'elixir,mist-grass,scroll',
    'royal-greatsword': 'dandelion-gladiator,chaos,slime',
    'sacrificial-greatsword': 'boreal-wolfs,ley-line,slime',
    'serpent-spine': 'aerosiderite,bone-shard,nectar',
    'skyrider-greatsword': 'aerosiderite,bone-shard,insignia-1',
    'skyward-pride': 'boreal-wolfs,ley-line,slime',
    'snow-tombed-starsilver': 'decarabian,horn,slime',
    'song-of-broken-pines': 'decarabian,horn,mask',
    'the-bell': 'decarabian,horn,nectar',
    'the-unforged': 'elixir,mist-grass,insignia-1',
    'waster-greatsword': 'boreal-wolfs,ley-line,slime',
    'white-iron-greatsword': 'dandelion-gladiator,chaos,slime',
    whiteblind: 'guyun,knife,insignia-1',
    'wolfs-gravestone': 'dandelion-gladiator,chaos,scroll',
    'beginners-protector': 'dandelion-gladiator,chaos,scroll',
    'black-tassel': 'aerosiderite,bone-shard,arrowhead',
    'blackcliff-pole': 'elixir,mist-grass,insignia-2',
    'crescent-pike': 'guyun,knife,insignia-1',
    deathmatch: 'boreal-wolfs,ley-line,nectar',
    'dragons-bane': 'elixir,mist-grass,scroll',
    'dragonspine-spear': 'boreal-wolfs,mist-grass,insignia-2',
    'favonius-lance': 'dandelion-gladiator,chaos,slime',
    halberd: 'elixir,mist-grass,nectar',
    'iron-point': 'dandelion-gladiator,chaos,scroll',
    //"kunwus-iris-rift" : "unknown,unknown,unknown",
    'lithic-spear': 'aerosiderite,bone-shard,arrowhead',
    'primordial-jade-winged-spear': 'guyun,knife,insignia-2',
    'prototype-grudge': 'aerosiderite,bone-shard,mask',
    'skyward-spine': 'dandelion-gladiator,chaos,scroll',
    'staff-of-homa': 'aerosiderite,ley-line,slime',
    'vortex-vanquisher': 'aerosiderite,bone-shard,insignia-1',
    'white-tassel': 'guyun,knife,insignia-2',
    'aquila-favonia': 'decarabian,horn,arrowhead',
    'blackcliff-longsword': 'guyun,knife,arrowhead',
    'cool-steel': 'decarabian,horn,arrowhead',
    'dark-iron-sword': 'guyun,knife,mask',
    'dull-blade': 'decarabian,horn,arrowhead',
    'favonius-sword': 'decarabian,horn,arrowhead',
    'festering-desire': 'dandelion-gladiator,horn,insignia-2',
    'fillet-blade': 'elixir,mist-grass,insignia-1',
    'freedom-sworn': 'dandelion-gladiator,chaos,scroll',
    'harbinger-of-dawn': 'boreal-wolfs,ley-line,slime',
    'iron-sting': 'aerosiderite,bone-shard,nectar',
    'lions-roar': 'guyun,knife,insignia-1',
    'primordial-jade-cutter': 'elixir,mist-grass,insignia-1',
    'prototype-rancour': 'elixir,mist-grass,insignia-2',
    'royal-longsword': 'decarabian,horn,mask',
    'sacrificial-sword': 'dandelion-gladiator,chaos,scroll',
    'silver-sword': 'decarabian,horn,arrowhead',
    'skyrider-sword': 'aerosiderite,bone-shard,insignia-2',
    'skyward-blade': 'boreal-wolfs,ley-line,slime',
    'summit-shaper': 'guyun,knife,mask',
    'the-alley-flash': 'dandelion-gladiator,chaos,mask',
    'the-black-sword': 'boreal-wolfs,ley-line,slime',
    'the-flute': 'boreal-wolfs,ley-line,slime',
    'travelers-handy-sword': 'dandelion-gladiator,chaos,scroll',
    null: 0,
};

export default weapons;
