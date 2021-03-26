const cacheName = "cache-26032021-3";
const resourcesToPrecache = [
	"/src/img/webp-items/adventurers-experience.webp",
	"/src/img/webp-items/agents-sacrificial-knife.webp",
	"/src/img/webp-items/agnidus-agate-chunk.webp",
	"/src/img/webp-items/agnidus-agate-fragment.webp",
	"/src/img/webp-items/agnidus-agate-gemstone.webp",
	"/src/img/webp-items/agnidus-agate-sliver.webp",
	"/src/img/webp-items/basalt-pillar.webp",
	"/src/img/webp-items/bit-of-aerosiderite.webp",
	"/src/img/webp-items/black-bronze-horn.webp",
	"/src/img/webp-items/black-crystal-horn.webp",
	"/src/img/webp-items/bloodjade-branch.webp",
	"/src/img/webp-items/boreal-wolfs-broken-fang.webp",
	"/src/img/webp-items/boreal-wolfs-cracked-tooth.webp",
	"/src/img/webp-items/boreal-wolfs-milk-tooth.webp",
	"/src/img/webp-items/boreal-wolfs-nostalgia.webp",
	"/src/img/webp-items/brilliant-diamond-chunk.webp",
	"/src/img/webp-items/brilliant-diamond-fragment.webp",
	"/src/img/webp-items/brilliant-diamond-gemstone.webp",
	"/src/img/webp-items/brilliant-diamond-sliver.webp",
	"/src/img/webp-items/calla-lily.webp",
	"/src/img/webp-items/cecilia.webp",
	"/src/img/webp-items/chains-of-the-dandelion-gladiator.webp",
	"/src/img/webp-items/chaos-circuit.webp",
	"/src/img/webp-items/chaos-core.webp",
	"/src/img/webp-items/chaos-device.webp",
	"/src/img/webp-items/chunk-of-aerosiderite.webp",
	"/src/img/webp-items/cleansing-heart.webp",
	"/src/img/webp-items/cor-lapis.webp",
	"/src/img/webp-items/crown-of-sagehood.webp",
	"/src/img/webp-items/crystalline-bloom.webp",
	"/src/img/webp-items/damaged-mask.webp",
	"/src/img/webp-items/dandelion-seed.webp",
	"/src/img/webp-items/dead-ley-line-branch.webp",
	"/src/img/webp-items/dead-ley-line-leaves.webp",
	"/src/img/webp-items/debris-of-decarabians-city.webp",
	"/src/img/webp-items/divine-body-from-guyun.webp",
	"/src/img/webp-items/divining-scroll.webp",
	"/src/img/webp-items/dragon-lords-crown.webp",
	"/src/img/webp-items/dream-of-the-dandelion-gladiator.webp",
	"/src/img/webp-items/dvalins-claw.webp",
	"/src/img/webp-items/dvalins-plume.webp",
	"/src/img/webp-items/dvalins-sigh.webp",
	"/src/img/webp-items/energy-nectar.webp",
	"/src/img/webp-items/enhancement-ore.webp",
	"/src/img/webp-items/everflame-seed.webp",
	"/src/img/webp-items/fetters-of-the-dandelion-gladiator.webp",
	"/src/img/webp-items/fine-enhancement-ore.webp",
	"/src/img/webp-items/firm-arrowhead.webp",
	"/src/img/webp-items/forbidden-curse-scroll.webp",
	"/src/img/webp-items/fossilized-bone-shard.webp",
	"/src/img/webp-items/fragile-bone-shard.webp",
	"/src/img/webp-items/fragment-of-decarabians-epic.webp",
	"/src/img/webp-items/glaze-lily.webp",
	"/src/img/webp-items/golden-raven-insignia.webp",
	"/src/img/webp-items/grain-of-aerosiderite.webp",
	"/src/img/webp-items/guide-to-ballad.webp",
	"/src/img/webp-items/guide-to-diligence.webp",
	"/src/img/webp-items/guide-to-freedom.webp",
	"/src/img/webp-items/guide-to-gold.webp",
	"/src/img/webp-items/guide-to-prosperity.webp",
	"/src/img/webp-items/guide-to-resistance.webp",
	"/src/img/webp-items/heavy-horn.webp",
	"/src/img/webp-items/heros-wit.webp",
	"/src/img/webp-items/hoarfrost-core.webp",
	"/src/img/webp-items/hunters-sacrificial-knife.webp",
	"/src/img/webp-items/hurricane-seed.webp",
	"/src/img/webp-items/inspectors-sacrificial-knife.webp",
	"/src/img/webp-items/jueyun-chili.webp",
	"/src/img/webp-items/juvenile-jade.webp",
	"/src/img/webp-items/ley-line-sprouts.webp",
	"/src/img/webp-items/lieutenants-insignia.webp",
	"/src/img/webp-items/lightning-prism.webp",
	"/src/img/webp-items/luminous-sands-from-guyun.webp",
	"/src/img/webp-items/lustrous-stone-from-guyun.webp",
	"/src/img/webp-items/mist-grass-pollen.webp",
	"/src/img/webp-items/mist-grass-wick.webp",
	"/src/img/webp-items/mist-grass.webp",
	"/src/img/webp-items/mist-veiled-gold-elixir.webp",
	"/src/img/webp-items/mist-veiled-lead-elixir.webp",
	"/src/img/webp-items/mist-veiled-mercury-elixir.webp",
	"/src/img/webp-items/mist-veiled-primo-elixir.webp",
	"/src/img/webp-items/mora.webp",
	"/src/img/webp-items/mystic-enhancement-ore.webp",
	"/src/img/webp-items/noctilucous-jade.webp",
	"/src/img/webp-items/ominous-mask.webp",
	"/src/img/webp-items/philanemo-mushroom.webp",
	"/src/img/webp-items/philosophies-of-ballad.webp",
	"/src/img/webp-items/philosophies-of-diligence.webp",
	"/src/img/webp-items/philosophies-of-freedom.webp",
	"/src/img/webp-items/philosophies-of-gold.webp",
	"/src/img/webp-items/philosophies-of-prosperity.webp",
	"/src/img/webp-items/philosophies-of-resistance.webp",
	"/src/img/webp-items/piece-of-aerosiderite.webp",
	"/src/img/webp-items/prithiva-topaz-chunk.webp",
	"/src/img/webp-items/prithiva-topaz-fragment.webp",
	"/src/img/webp-items/prithiva-topaz-gemstone.webp",
	"/src/img/webp-items/prithiva-topaz-sliver.webp",
	"/src/img/webp-items/qingxin.webp",
	"/src/img/webp-items/recruits-insignia.webp",
	"/src/img/webp-items/relic-from-guyun.webp",
	"/src/img/webp-items/ring-of-boreas.webp",
	"/src/img/webp-items/scattered-piece-of-decarabians-dream.webp",
	"/src/img/webp-items/sealed-scroll.webp",
	"/src/img/webp-items/sergeants-insignia.webp",
	"/src/img/webp-items/shackles-of-the-dandelion-gladiator.webp",
	"/src/img/webp-items/shadow-of-the-warrior.webp",
	"/src/img/webp-items/shard-of-a-foul-legacy.webp",
	"/src/img/webp-items/sharp-arrowhead.webp",
	"/src/img/webp-items/shimmering-nectar.webp",
	"/src/img/webp-items/shivada-jade-chunk.webp",
	"/src/img/webp-items/shivada-jade-fragment.webp",
	"/src/img/webp-items/shivada-jade-gemstone.webp",
	"/src/img/webp-items/shivada-jade-sliver.webp",
	"/src/img/webp-items/silk-flower.webp",
	"/src/img/webp-items/silver-raven-insignia.webp",
	"/src/img/webp-items/slime-concentrate.webp",
	"/src/img/webp-items/slime-condensate.webp",
	"/src/img/webp-items/slime-secretions.webp",
	"/src/img/webp-items/small-lamp-grass.webp",
	"/src/img/webp-items/spirit-locket-of-boreas.webp",
	"/src/img/webp-items/stained-mask.webp",
	"/src/img/webp-items/starconch.webp",
	"/src/img/webp-items/sturdy-bone-shard.webp",
	"/src/img/webp-items/tail-of-boreas.webp",
	"/src/img/webp-items/teachings-of-ballad.webp",
	"/src/img/webp-items/teachings-of-diligence.webp",
	"/src/img/webp-items/teachings-of-freedom.webp",
	"/src/img/webp-items/teachings-of-gold.webp",
	"/src/img/webp-items/teachings-of-prosperity.webp",
	"/src/img/webp-items/teachings-of-resistance.webp",
	"/src/img/webp-items/tile-of-decarabians-tower.webp",
	"/src/img/webp-items/treasure-hoarder-insignia.webp",
	"/src/img/webp-items/tusk-of-monoceros-caeli.webp",
	"/src/img/webp-items/unknown-weekly-material.webp",
	"/src/img/webp-items/vajrada-amethyst-chunk.webp",
	"/src/img/webp-items/vajrada-amethyst-fragment.webp",
	"/src/img/webp-items/vajrada-amethyst-gemstone.webp",
	"/src/img/webp-items/vajrada-amethyst-sliver.webp",
	"/src/img/webp-items/valberry.webp",
	"/src/img/webp-items/varunada-lazurite-chunk.webp",
	"/src/img/webp-items/varunada-lazurite-fragment.webp",
	"/src/img/webp-items/varunada-lazurite-gemstone.webp",
	"/src/img/webp-items/varunada-lazurite-sliver.webp",
	"/src/img/webp-items/vayuda-turquoise-chunk.webp",
	"/src/img/webp-items/vayuda-turquoise-fragment.webp",
	"/src/img/webp-items/vayuda-turquoise-gemstone.webp",
	"/src/img/webp-items/vayuda-turquoise-sliver.webp",
	"/src/img/webp-items/violetgrass.webp",
	"/src/img/webp-items/wanderers-advice.webp",
	"/src/img/webp-items/weathered-arrowhead.webp",
	"/src/img/webp-items/whopperflower-nectar.webp",
	"/src/img/webp-items/windwheel-aster.webp",
	"/src/img/webp-items/wolfhook.webp",
	"/src/img/webp-weapons/alley-hunter.webp",
	"/src/img/webp-weapons/amber-catalyst.webp",
	"/src/img/webp-weapons/amos-bow.webp",
	"/src/img/webp-weapons/apprentices-notes.webp",
	"/src/img/webp-weapons/aquila-favonia.webp",
	"/src/img/webp-weapons/beginners-protector.webp",
	"/src/img/webp-weapons/black-tassel.webp",
	"/src/img/webp-weapons/blackcliff-agate.webp",
	"/src/img/webp-weapons/blackcliff-longsword.webp",
	"/src/img/webp-weapons/blackcliff-pole.webp",
	"/src/img/webp-weapons/blackcliff-slasher.webp",
	"/src/img/webp-weapons/blackcliff-warbow.webp",
	"/src/img/webp-weapons/bloodtainted-greatsword.webp",
	"/src/img/webp-weapons/compound-bow.webp",
	"/src/img/webp-weapons/cool-steel.webp",
	"/src/img/webp-weapons/crescent-pike.webp",
	"/src/img/webp-weapons/dark-iron-sword.webp",
	"/src/img/webp-weapons/deathmatch.webp",
	"/src/img/webp-weapons/debate-club.webp",
	"/src/img/webp-weapons/dragons-bane.webp",
	"/src/img/webp-weapons/dragonspine-spear.webp",
	"/src/img/webp-weapons/dull-blade.webp",
	"/src/img/webp-weapons/ebony-bow.webp",
	"/src/img/webp-weapons/emerald-orb.webp",
	"/src/img/webp-weapons/eye-of-perception.webp",
	"/src/img/webp-weapons/favonius-codex.webp",
	"/src/img/webp-weapons/favonius-greatsword.webp",
	"/src/img/webp-weapons/favonius-lance.webp",
	"/src/img/webp-weapons/favonius-sword.webp",
	"/src/img/webp-weapons/favonius-warbow.webp",
	"/src/img/webp-weapons/ferrous-shadow.webp",
	"/src/img/webp-weapons/festering-desire.webp",
	"/src/img/webp-weapons/fillet-blade.webp",
	"/src/img/webp-weapons/frostbearer.webp",
	"/src/img/webp-weapons/halberd.webp",
	"/src/img/webp-weapons/harbinger-of-dawn.webp",
	"/src/img/webp-weapons/hunters-bow.webp",
	"/src/img/webp-weapons/iron-point.webp",
	"/src/img/webp-weapons/iron-sting.webp",
	"/src/img/webp-weapons/kunwus-iris-rift.webp",
	"/src/img/webp-weapons/lions-roar.webp",
	"/src/img/webp-weapons/lithic-blade.webp",
	"/src/img/webp-weapons/lithic-spear.webp",
	"/src/img/webp-weapons/lost-prayer-to-the-sacred-winds.webp",
	"/src/img/webp-weapons/magic-guide.webp",
	"/src/img/webp-weapons/mappa-mare.webp",
	"/src/img/webp-weapons/memory-of-dust.webp",
	"/src/img/webp-weapons/messenger.webp",
	"/src/img/webp-weapons/old-mercs-pal.webp",
	"/src/img/webp-weapons/otherworldly-story.webp",
	"/src/img/webp-weapons/pocket-grimoire.webp",
	"/src/img/webp-weapons/primordial-jade-cutter.webp",
	"/src/img/webp-weapons/primordial-jade-winged-spear.webp",
	"/src/img/webp-weapons/prototype-aminus.webp",
	"/src/img/webp-weapons/prototype-crescent.webp",
	"/src/img/webp-weapons/prototype-grudge.webp",
	"/src/img/webp-weapons/prototype-malice.webp",
	"/src/img/webp-weapons/prototype-rancour.webp",
	"/src/img/webp-weapons/quartz.webp",
	"/src/img/webp-weapons/rainslasher.webp",
	"/src/img/webp-weapons/raven-bow.webp",
	"/src/img/webp-weapons/recurve-bow.webp",
	"/src/img/webp-weapons/royal-bow.webp",
	"/src/img/webp-weapons/royal-greatsword.webp",
	"/src/img/webp-weapons/royal-grimoire.webp",
	"/src/img/webp-weapons/royal-longsword.webp",
	"/src/img/webp-weapons/rust.webp",
	"/src/img/webp-weapons/sacrificial-bow.webp",
	"/src/img/webp-weapons/sacrificial-fragments.webp",
	"/src/img/webp-weapons/sacrificial-greatsword.webp",
	"/src/img/webp-weapons/sacrificial-sword.webp",
	"/src/img/webp-weapons/seasoned-hunters-bow.webp",
	"/src/img/webp-weapons/serene-requiem.webp",
	"/src/img/webp-weapons/serpent-spine.webp",
	"/src/img/webp-weapons/sharpshooters-oath.webp",
	"/src/img/webp-weapons/silver-sword.webp",
	"/src/img/webp-weapons/skyrider-greatsword.webp",
	"/src/img/webp-weapons/skyrider-sword.webp",
	"/src/img/webp-weapons/skyward-atlas.webp",
	"/src/img/webp-weapons/skyward-blade.webp",
	"/src/img/webp-weapons/skyward-harp.webp",
	"/src/img/webp-weapons/skyward-pride.webp",
	"/src/img/webp-weapons/skyward-spine.webp",
	"/src/img/webp-weapons/slingshot.webp",
	"/src/img/webp-weapons/snow-tombed-starsilver.webp",
	"/src/img/webp-weapons/solar-pearl.webp",
	"/src/img/webp-weapons/song-of-broken-pines.webp",
	"/src/img/webp-weapons/staff-of-homa.webp",
	"/src/img/webp-weapons/summit-shaper.webp",
	"/src/img/webp-weapons/the-alley-flash.webp",
	"/src/img/webp-weapons/the-bell.webp",
	"/src/img/webp-weapons/the-black-sword.webp",
	"/src/img/webp-weapons/the-flute.webp",
	"/src/img/webp-weapons/the-stringless.webp",
	"/src/img/webp-weapons/the-unforged.webp",
	"/src/img/webp-weapons/the-viridescent-hunt.webp",
	"/src/img/webp-weapons/the-widsith.webp",
	"/src/img/webp-weapons/thrilling-tales-of-dragon-slayers.webp",
	"/src/img/webp-weapons/travelers-handy-sword.webp",
	"/src/img/webp-weapons/twin-nephrite.webp",
	"/src/img/webp-weapons/vortex-vanquisher.webp",
	"/src/img/webp-weapons/waster-greatsword.webp",
	"/src/img/webp-weapons/white-iron-greatsword.webp",
	"/src/img/webp-weapons/white-tassel.webp",
	"/src/img/webp-weapons/whiteblind.webp",
	"/src/img/webp-weapons/wine-and-song.webp",
	"/src/img/webp-weapons/wolfs-gravestone.webp",
	"/src/img/webp-characters/gi-albedo.webp",
	"/src/img/webp-characters/gi-amber.webp",
	"/src/img/webp-characters/gi-ayaka.webp",
	"/src/img/webp-characters/gi-barbara.webp",
	"/src/img/webp-characters/gi-beidou.webp",
	"/src/img/webp-characters/gi-bennett.webp",
	"/src/img/webp-characters/gi-childe.webp",
	"/src/img/webp-characters/gi-chongyun.webp",
	"/src/img/webp-characters/gi-diluc.webp",
	"/src/img/webp-characters/gi-diona.webp",
	"/src/img/webp-characters/gi-eula.webp",
	"/src/img/webp-characters/gi-fischl.webp",
	"/src/img/webp-characters/gi-ganyu.webp",
	"/src/img/webp-characters/gi-hutao.webp",
	"/src/img/webp-characters/gi-jean.webp",
	"/src/img/webp-characters/gi-kaeya.webp",
	"/src/img/webp-characters/gi-keqing.webp",
	"/src/img/webp-characters/gi-klee.webp",
	"/src/img/webp-characters/gi-lisa.webp",
	"/src/img/webp-characters/gi-mona.webp",
	"/src/img/webp-characters/gi-ningguang.webp",
	"/src/img/webp-characters/gi-noelle.webp",
	"/src/img/webp-characters/gi-qiqi.webp",
	"/src/img/webp-characters/gi-razor.webp",
	"/src/img/webp-characters/gi-rosaria.webp",
	"/src/img/webp-characters/gi-sucrose.webp",
	"/src/img/webp-characters/gi-traveler.webp",
	"/src/img/webp-characters/gi-venti.webp",
	"/src/img/webp-characters/gi-xiangling.webp",
	"/src/img/webp-characters/gi-xiao.webp",
	"/src/img/webp-characters/gi-xingqiu.webp",
	"/src/img/webp-characters/gi-xinyan.webp",
	"/src/img/webp-characters/gi-yanfei.webp",
	"/src/img/webp-characters/gi-zhongli.webp",
	"/src/img/favicomatic/apple-touch-icon-114x114.png",
	"/src/img/favicomatic/apple-touch-icon-120x120.png",
	"/src/img/favicomatic/apple-touch-icon-144x144.png",
	"/src/img/favicomatic/apple-touch-icon-152x152.png",
	"/src/img/favicomatic/apple-touch-icon-57x57.png",
	"/src/img/favicomatic/apple-touch-icon-60x60.png",
	"/src/img/favicomatic/apple-touch-icon-72x72.png",
	"/src/img/favicomatic/apple-touch-icon-76x76.png",
	"/src/img/favicomatic/code.txt",
	"/src/img/favicomatic/favicon-128.png",
	"/src/img/favicomatic/favicon-16x16.png",
	"/src/img/favicomatic/favicon-196x196.png",
	"/src/img/favicomatic/favicon-32x32.png",
	"/src/img/favicomatic/favicon-96x96.png",
	"/src/img/favicomatic/favicon.ico",
	"/src/img/favicomatic/mstile-144x144.png",
	"/src/img/favicomatic/mstile-150x150.png",
	"/src/img/favicomatic/mstile-310x150.png",
	"/src/img/favicomatic/mstile-310x310.png",
	"/src/img/favicomatic/mstile-70x70.png",
];

self.addEventListener("install", (event) => {
	console.log("install event");
	event.waitUntil(
		caches.open(cacheName).then((cache) => {
			return cache.addAll(resourcesToPrecache);
		})
	);
	caches.keys().then((keys) => {
		for (key of keys) {
			if (key === cacheName) continue;
			caches.delete(key);
		}
	});
	event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
	console.log("activate event");
	event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((cachedResponse) => {
			return cachedResponse || fetch(event.request);
		})
	);
});
