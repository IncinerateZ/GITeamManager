const characters = {
    albedo: {
        ascension: 'prithiva-topaz,basalt-pillar,cecilia,scroll',
        talents: 'ballad,tusk-of-monoceros-caeli,scroll',
    },
    amber: {
        ascension: 'agnidus-agate,everflame-seed,small-lamp-grass,arrowhead',
        talents: 'freedom,dvalins-sigh,arrowhead',
    },
    ayaka: {
        ascension: 'shivada-jade,perpetual-heart,sakura-bloom,handguard',
        talents: 'elegance,bloodjade-branch,handguard',
    },
    barbara: {
        ascension:
            'varunada-lazurite,cleansing-heart,philanemo-mushroom,scroll',
        talents: 'freedom,ring-of-boreas,scroll',
    },
    beidou: {
        ascension:
            'vajrada-amethyst,lightning-prism,noctilucous-jade,insignia-1',
        talents: 'gold,dvalins-sigh,insignia-1',
    },
    bennett: {
        ascension: 'agnidus-agate,everflame-seed,windwheel-aster,insignia-1',
        talents: 'resistance,dvalins-plume,insignia-1',
    },
    childe: {
        ascension: 'varunada-lazurite,cleansing-heart,starconch,insignia-2',
        talents: 'freedom,shard-of-a-foul-legacy,insignia-2',
    },
    chongyun: {
        ascension: 'shivada-jade,hoarfrost-core,cor-lapis,mask',
        talents: 'diligence,dvalins-sigh,mask',
    },
    diluc: {
        ascension: 'agnidus-agate,everflame-seed,small-lamp-grass,insignia-2',
        talents: 'resistance,dvalins-plume,insignia-2',
    },
    diona: {
        ascension: 'shivada-jade,hoarfrost-core,calla-lily,arrowhead',
        talents: 'freedom,shard-of-a-foul-legacy,arrowhead',
    },
    eula: {
        ascension: 'shivada-jade,crystalline-bloom,dandelion-seed,mask',
        talents: 'resistance,dragon-lords-crown,mask',
    },
    fischl: {
        ascension:
            'vajrada-amethyst,lightning-prism,small-lamp-grass,arrowhead',
        talents: 'ballad,spirit-locket-of-boreas,arrowhead',
    },
    ganyu: {
        ascension: 'shivada-jade,hoarfrost-core,qingxin,nectar',
        talents: 'diligence,shadow-of-the-warrior,nectar',
    },
    hutao: {
        ascension: 'agnidus-agate,juvenile-jade,silk-flower,nectar',
        talents: 'diligence,shard-of-a-foul-legacy,nectar',
    },
    jean: {
        ascension: 'vayuda-turquoise,hurricane-seed,dandelion-seed,mask',
        talents: 'resistance,dvalins-plume,mask',
    },
    kaeya: {
        ascension: 'shivada-jade,hoarfrost-core,calla-lily,insignia-1',
        talents: 'ballad,spirit-locket-of-boreas,insignia-1',
    },
    kazuha: {
        ascension: 'vayuda-turquoise,marionette-core,sea-ganoderma,insignia-1',
        talents: 'diligence,gilded-scale,insignia-1',
    },
    keqing: {
        ascension: 'vajrada-amethyst,lightning-prism,cor-lapis,nectar',
        talents: 'prosperity,ring-of-boreas,nectar',
    },
    klee: {
        ascension: 'agnidus-agate,everflame-seed,philanemo-mushroom,scroll',
        talents: 'freedom,ring-of-boreas,scroll',
    },
    lisa: {
        ascension: 'vajrada-amethyst,lightning-prism,valberry,slime',
        talents: 'ballad,dvalins-claw,slime',
    },
    mona: {
        ascension:
            'varunada-lazurite,cleansing-heart,philanemo-mushroom,nectar',
        talents: 'resistance,ring-of-boreas,nectar',
    },
    ningguang: {
        ascension: 'prithiva-topaz,basalt-pillar,glaze-lily,insignia-2',
        talents: 'prosperity,spirit-locket-of-boreas,insignia-2',
    },
    noelle: {
        ascension: 'prithiva-topaz,basalt-pillar,valberry,mask',
        talents: 'resistance,dvalins-claw,mask',
    },
    qiqi: {
        ascension: 'shivada-jade,hoarfrost-core,violetgrass,scroll',
        talents: 'prosperity,tail-of-boreas,scroll',
    },
    razor: {
        ascension: 'vajrada-amethyst,lightning-prism,wolfhook,mask',
        talents: 'resistance,dvalins-claw,mask',
    },
    rosaria: {
        ascension: 'shivada-jade,hoarfrost-core,valberry,insignia-2',
        talents: 'ballad,shadow-of-the-warrior,insignia-2',
    },
    sayu: {
        ascension: 'vayuda-turquoise,marionette-core,crystal-marrow,nectar',
        talents: 'light,gilded-scale,nectar',
    },
    sucrose: {
        ascension: 'vayuda-turquoise,hurricane-seed,windwheel-aster,nectar',
        talents: 'freedom,spirit-locket-of-boreas,nectar',
    },
    venti: {
        ascension: 'vayuda-turquoise,hurricane-seed,cecilia,slime',
        talents: 'ballad,tail-of-boreas,slime',
    },
    xiangling: {
        ascension: 'agnidus-agate,everflame-seed,jueyun-chili,slime',
        talents: 'diligence,dvalins-claw,slime',
    },
    xiao: {
        ascension: 'vayuda-turquoise,juvenile-jade,qingxin,slime',
        talents: 'prosperity,shadow-of-the-warrior,slime',
    },
    xingqiu: {
        ascension: 'shivada-jade,cleansing-heart,silk-flower,mask',
        talents: 'gold,tail-of-boreas,mask',
    },
    xinyan: {
        ascension: 'agnidus-agate,everflame-seed,violetgrass,insignia-1',
        talents: 'gold,tusk-of-monoceros-caeli,insignia-1',
    },
    yanfei: {
        ascension: 'agnidus-agate,juvenile-jade,noctilucous-jade,insignia-1',
        talents: 'gold,bloodjade-branch,insignia-1',
    },
    yoimiya: {
        ascension: 'agnidus-agate,smoldering-pearl,naku-weed,scroll',
        talents: 'transience,dragon-lords-crown,scroll',
    },
    zhongli: {
        ascension: 'prithiva-topaz,basalt-pillar,cor-lapis,slime',
        talents: 'gold,tusk-of-monoceros-caeli,slime',
    },
    raiden: {
        ascension: 'vajrada-amethyst,storm-bead,tenkumo-fruit,handguard',
        talents: 'light,molten-moment,handguard',
    },
    kokomi: {
        ascension: 'varunada-lazurite,dew-of-repudiation,pearl,spectral',
        talents: 'transience,hellfire-butterfly,spectral',
    },
    sara: {
        ascension: 'vajrada-amethyst,storm-bead,dendrobium,mask',
        talents: 'elegance,ashen-heart,mask',
    },
    aloy: {
        ascension: 'shivada-jade,crystalline-bloom,crystal-marrow,spectral',
        talents: 'freedom,molten-moment,spectral',
    },
};

export default characters;
