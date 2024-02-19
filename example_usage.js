// Start all sounds in 1 seconds. This gives WebAudio a chance to load the sounds and attempts to synchronize them.
const startTime = new Date().getTime() + 1000;
new Howl({
  src: ['RAVEL_G_1_EXPO_1_116_s.mp3'],
  onplay: () => { console.log('Now playing: RAVEL_G_1_EXPO_1_116_s.mp3'); }
}).play({startTime: startTime});
new Howl({
  src: ['RAVEL_G_1_EXPO_1_116_p.mp3'],
  onplay: () => { console.log('Now playing: RAVEL_G_1_EXPO_1_116_p.mp3'); }
}).play({startTime: startTime});
new Howl({
  src: ['RAVEL_G_1_EXPO_1_116_w.mp3'],
  onplay: () => { console.log('Now playing: RAVEL_G_1_EXPO_1_116_w.mp3'); }
}).play({startTime: startTime});
new Howl({
  src: ['RAVEL_G_1_EXPO_1_116_b.mp3'],
  onplay: () => { console.log('Now playing: RAVEL_G_1_EXPO_1_116_b.mp3'); }
}).play({startTime: startTime});
