const materials = {
    aerosiderite: {
        2: 'grain-of-aerosiderite',
        3: 'piece-of-aerosiderite',
        4: 'bit-of-aerosiderite',
        5: 'chunk-of-aerosiderite',
    },
    'boreal-wolfs': {
        2: 'boreal-wolfs-milk-tooth',
        3: 'boreal-wolfs-cracked-tooth',
        4: 'boreal-wolfs-broken-fang',
        5: 'boreal-wolfs-nostalgia',
    },
    'dandelion-gladiator': {
        2: 'fetters-of-the-dandelion-gladiator',
        3: 'chains-of-the-dandelion-gladiator',
        4: 'shackles-of-the-dandelion-gladiator',
        5: 'dream-of-the-dandelion-gladiator',
    },
    decarabian: {
        2: 'tile-of-decarabians-tower',
        3: 'debris-of-decarabians-city',
        4: 'fragment-of-decarabians-epic',
        5: 'scattered-piece-of-decarabians-dream',
    },
    guyun: {
        2: 'luminous-sands-from-guyun',
        3: 'lustrous-stone-from-guyun',
        4: 'relic-from-guyun',
        5: 'divine-body-from-guyun',
    },
    elixir: {
        2: 'mist-veiled-lead-elixir',
        3: 'mist-veiled-mercury-elixir',
        4: 'mist-veiled-gold-elixir',
        5: 'mist-veiled-primo-elixir',
    },
    knife: {
        2: 'hunters-sacrificial-knife',
        3: 'agents-sacrificial-knife',
        4: 'inspectors-sacrificial-knife',
    },
    horn: {
        2: 'heavy-horn',
        3: 'black-bronze-horn',
        4: 'black-crystal-horn',
    },
    chaos: {
        2: 'chaos-device',
        3: 'chaos-circuit',
        4: 'chaos-core',
    },
    'chaos-2': {
        2: 'chaos-axis',
        3: 'chaos-gear',
        4: 'chaos-oculus',
    },
    mask: {
        2: 'damaged-mask',
        3: 'stained-mask',
        4: 'ominous-mask',
    },
    'mask-2': {
        2: 'mask-of-the-wicked-lieutenant',
        3: 'mask-of-the-tigers-bite',
        4: 'mask-of-the-one-horned',
        5: 'mask-of-the-kijin',
    },
    'ley-line': {
        2: 'dead-ley-line-branch',
        3: 'dead-ley-line-leaves',
        4: 'ley-line-sprouts',
    },
    scroll: {
        2: 'divining-scroll',
        3: 'sealed-scroll',
        4: 'forbidden-curse-scroll',
    },
    nectar: {
        2: 'whopperflower-nectar',
        3: 'shimmering-nectar',
        4: 'energy-nectar',
    },
    arrowhead: {
        2: 'firm-arrowhead',
        3: 'sharp-arrowhead',
        4: 'weathered-arrowhead',
    },
    'bone-shard': {
        2: 'fragile-bone-shard',
        3: 'sturdy-bone-shard',
        4: 'fossilized-bone-shard',
    },
    'insignia-1': {
        2: 'treasure-hoarder-insignia',
        3: 'silver-raven-insignia',
        4: 'golden-raven-insignia',
    },
    'insignia-2': {
        2: 'recruits-insignia',
        3: 'sergeants-insignia',
        4: 'lieutenants-insignia',
    },
    'insignia-3': {
        2: '161',
        3: '162',
        4: '163',
    },
    'mist-grass': {
        2: 'mist-grass',
        3: 'mist-grass-pollen',
        4: 'mist-grass-wick',
    },
    slime: {
        2: 'slime-condensate',
        3: 'slime-secretions',
        4: 'slime-concentrate',
    },
    'agnidus-agate': {
        2: 'agnidus-agate-sliver',
        3: 'agnidus-agate-fragment',
        4: 'agnidus-agate-chunk',
        5: 'agnidus-agate-gemstone',
    },
    'varunada-lazurite': {
        2: 'varunada-lazurite-sliver',
        3: 'varunada-lazurite-fragment',
        4: 'varunada-lazurite-chunk',
        5: 'varunada-lazurite-gemstone',
    },
    'prithiva-topaz': {
        2: 'prithiva-topaz-sliver',
        3: 'prithiva-topaz-fragment',
        4: 'prithiva-topaz-chunk',
        5: 'prithiva-topaz-gemstone',
    },
    'vajrada-amethyst': {
        2: 'vajrada-amethyst-sliver',
        3: 'vajrada-amethyst-fragment',
        4: 'vajrada-amethyst-chunk',
        5: 'vajrada-amethyst-gemstone',
    },
    'shivada-jade': {
        2: 'shivada-jade-sliver',
        3: 'shivada-jade-fragment',
        4: 'shivada-jade-chunk',
        5: 'shivada-jade-gemstone',
    },
    'vayuda-turquoise': {
        2: 'vayuda-turquoise-sliver',
        3: 'vayuda-turquoise-fragment',
        4: 'vayuda-turquoise-chunk',
        5: 'vayuda-turquoise-gemstone',
    },
    freedom: {
        2: 'teachings-of-freedom',
        3: 'guide-to-freedom',
        4: 'philosophies-of-freedom',
    },
    resistance: {
        2: 'teachings-of-resistance',
        3: 'guide-to-resistance',
        4: 'philosophies-of-resistance',
    },
    ballad: {
        2: 'teachings-of-ballad',
        3: 'guide-to-ballad',
        4: 'philosophies-of-ballad',
    },
    prosperity: {
        2: 'teachings-of-prosperity',
        3: 'guide-to-prosperity',
        4: 'philosophies-of-prosperity',
    },
    diligence: {
        2: 'teachings-of-diligence',
        3: 'guide-to-diligence',
        4: 'philosophies-of-diligence',
    },
    gold: {
        2: 'teachings-of-gold',
        3: 'guide-to-gold',
        4: 'philosophies-of-gold',
    },
    elegance: {
        2: 'teachings-of-elegance',
        3: 'guide-to-elegance',
        4: 'philosophies-of-elegance',
    },
    light: {
        2: 'teachings-of-light',
        3: 'guide-to-light',
        4: 'philosophies-of-light',
    },
    transience: {
        2: 'teachings-of-transience',
        3: 'guide-to-transience',
        4: 'philosophies-of-transience',
    },
    prism: {
        2: 'dismal-prism',
        3: 'crystal-prism',
        4: 'polarizing-prism',
    },
    handguard: {
        2: 'old-handguard',
        3: 'kageuchi-handguard',
        4: 'famed-handguard',
    },
    narukamis: {
        2: 'narukamis-wisdom',
        3: 'narukamis-joy',
        4: 'narukamis-affection',
        5: 'narukamis-valor',
    },
    'outer-sea': {
        2: 'outer-sea-coral-branch',
        3: 'outer-sea-jeweled-branch',
        4: 'outer-sea-jade-branch',
        5: 'outer-sea-gold-branch',
    },
    spectral: {
        2: 'spectral-husk',
        3: 'spectral-heart',
        4: 'spectral-nucleus',
    },
    unknown: {
        0: 'unknown-weekly-material',
    },
};

export default materials;
