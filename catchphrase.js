var timerFlag = false;
var timerDigit = 0;
var underTenFlag = false;
var timeVals = ['00:30', '00:30', '00:40', '00:45', '00:50', '00:55', '01:00', '01:05', '01:10', '01:15', '01:20', '01:25', '01:30'];
function play() {
	var audio = new Audio(
		'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
	audio = !underTenFlag ? new Audio('http://soundbible.com/grab.php?id=2044&type=mp3') : audio;
	audio.play();
}
var wordList = 'AFRICA,AGENT,AIR,ALIEN,ALPS,AMAZON,AMBULANCE,AMERICA,ANGEL,ANTARCTICA,APPLE,ARM,ATLANTIS,AUSTRALIA,AZTEC,BACK,BALL,BAND,BANK,BAR,BARK,BAT,BATTERY,BEACH,BEAR,BEAT,BED,BEIJING,BELL,BELT,BERLIN,BERMUDA,BERRY,BILL,BLOCK,BOARD,BOLT,BOMB,BOND,BOOM,BOOT,BOTTLE,BOW,BOX,BRIDGE,BRUSH,BUCK,BUFFALO,BUG,BUGLE,BUTTON,CALF,CANADA,CAP,CAPITAL,CAR,CARD,CARROT,CASINO,CAST,CAT,CELL,CENTAUR,CENTER,CHAIR,CHANGE,CHARGE,CHECK,CHEST,CHICK,CHINA,CHOCOLATE,CHURCH,CIRCLE,CLIFF,CLOAK,CLUB,CODE,COLD,COMIC,COMPOUND,CONCERT,CONDUCTOR,CONTRACT,COOK,COPPER,COTTON,COURT,COVER,CRANE,CRASH,CRICKET,CROSS,CROWN,CYCLE,CZECH,DANCE,DATE,DAY,DEATH,DECK,DEGREE,DIAMOND,DICE,DINOSAUR,DISEASE,DOCTOR,DOG,DRAFT,DRAGON,DRESS,DRILL,DROP,DUCK,DWARF,EAGLE,EGYPT,EMBASSY,ENGINE,ENGLAND,EUROPE,EYE,FACE,FAIR,FALL,FAN,FENCE,FIELD,FIGHTER,FIGURE,FILE,FILM,FIRE,FISH,FLUTE,FLY,FOOT,FORCE,FOREST,FORK,FRANCE,GAME,GAS,GENIUS,GERMANY,GHOST,GIANT,GLASS,GLOVE,GOLD,GRACE,GRASS,GREECE,GREEN,GROUND,HAM,HAND,HAWK,HEAD,HEART,HELICOPTER,HIMALAYAS,HOLE,HOLLYWOOD,HONEY,HOOD,HOOK,HORN,HORSE,HORSESHOE,HOSPITAL,HOTEL,ICE,ICE CREAM,INDIA,IRON,IVORY,JACK,JAM,JET,JUPITER,KANGAROO,KETCHUP,KEY,KID,KING,KIWI,KNIFE,KNIGHT,LAB,LAP,LASER,LAWYER,LEAD,LEMON,LEPRECHAUN,LIFE,LIGHT,LIMOUSINE,LINE,LINK,LION,LITTER,LOCH NESS,LOCK,LOG,LONDON,LUCK,MAIL,MAMMOTH,MAPLE,MARBLE,MARCH,MASS,MATCH,MERCURY,MEXICO,MICROSCOPE,MILLIONAIRE,MINE,MINT,MISSILE,MODEL,MOLE,MOON,MOSCOW,MOUNT,MOUSE,MOUTH,MUG,NAIL,NEEDLE,NET,NEW YORK,NIGHT,NINJA,NOTE,NOVEL,NURSE,NUT,OCTOPUS,OIL,OLIVE,OLYMPUS,OPERA,ORANGE,ORGAN,PALM,PAN,PANTS,PAPER,PARACHUTE,PARK,PART,PASS,PASTE,PENGUIN,PHOENIX,PIANO,PIE,PILOT,PIN,PIPE,PIRATE,PISTOL,PIT,PITCH,PLANE,PLASTIC,PLATE,PLATYPUS,PLAY,PLOT,POINT,POISON,POLE,POLICE,POOL,PORT,POST,POUND,PRESS,PRINCESS,PUMPKIN,PUPIL,PYRAMID,QUEEN,RABBIT,RACKET,RAY,REVOLUTION,RING,ROBIN,ROBOT,ROCK,ROME,ROOT,ROSE,ROULETTE,ROUND,ROW,RULER,SATELLITE,SATURN,SCALE,SCHOOL,SCIENTIST,SCORPION,SCREEN,SCUBA DIVER,SEAL,SERVER,SHADOW,SHAKESPEARE,SHARK,SHIP,SHOE,SHOP,SHOT,SINK,SKYSCRAPER,SLIP,SLUG,SMUGGLER,SNOW,SNOWMAN,SOCK,SOLDIER,SOUL,SOUND,SPACE,SPELL,SPIDER,SPIKE,SPINE,SPOT,SPRING,SPY,SQUARE,STADIUM,STAFF,STAR,STATE,STICK,STOCK,STRAW,STREAM,STRIKE,STRING,SUB,SUIT,SUPERHERO,SWING,SWITCH,TABLE,TABLET,TAG,TAIL,TAP,TEACHER,TELESCOPE,TEMPLE,THEATER,THIEF,THUMB,TICK,TIE,TIME,TOKYO,TOOTH,TORCH,TOWER,TRACK,TRAIN,TRIANGLE,TRIP,TRUNK,TUBE,TURKEY,UNDERTAKER,UNICORN,VACUUM,VAN,VET,WAKE,WALL,WAR,WASHER,WASHINGTON,WATCH,WATER,WAVE,WEB,WELL,WHALE,WHIP,WIND,WITCH,WORM,YARD,whatever,buddy,sip,chicken coop,blur,chime,bleach,clay,blossom,cog,wish,through,feudalism,whiplash,cot,blueprint,beanstalk,think,cardboard,darts,inn,Zen,crow,nest,BFF,sheriff,tiptop,dot,bob,garden hose,blimp,dress shirt,reimbursement,capitalism,step-daughter,applause,jig,jade,blunt,application,rag,squint,intern,brainstorm,sling,half,pinch,leak,skating rink,jog,jammed,shrink ray,dent,scoundrel,escalator,phone charger,kitchen,knife,set,sequins,ladder,rung,flu,scuff,mast,sash,modern,ginger,clockwork,mess,mascot,runt,chain,scar tissue,suntan,pomp,scramble,sentence,first mate,cuff,cuticle,fortnight,riddle,spool,full,moon,forever,rut,hem,new,train,diver,fringe,humidifier,handwriting,dawn,dimple,gray hair,hedge,plank,race,publisher,fizz,gem,ditch,wool,plaid,fancy,feast,Murphy\'s Law,billboard,flush,inconceivable,tide,midsummer,population,my,elm,organ,flannel,hatch,booth,doorbell,witch,bats,costume,autumn,skeleton,sweets,afraid,scarecrow,candy,Frankenstein,candy corn,hay ride,boo,lollipop,dark,ghost,trick or treat,scary,jack-o-lantern,haunted house,ghost,story,spider,werewolf,scary,movies,graveyard,spells,pumpkin,vampire,marshmallow,zombie,secret,lab,ma scientist,monster,chocolate,spider web,black,Dracula,grave,creepy,Monster Mash,corn,maze,candle,crypt,apple,cider,frightened,fortune teller,pumpkin,seeds,horror,ghoul,coffin,nighttime,Ghostbusters,goblin,spooky,lantern,gypsy';
var words = wordList.split(',');
function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}
const timer = new Tock({
      countdown: true,
      interval: 10,
      callback: () => {
        var current_time = timer.msToTime(timer.lap());
        document.getElementById('clock').value = current_time;
        if (timerDigit !== current_time[4]){
					play();
          if(current_time[1] === '0'){ play(); }
          if(current_time[1] === '0' && parseInt(current_time[3]) < 3){ play(); }
          if(current_time[1] === '0' && current_time[3] === '0'){ underTenFlag = true; play(); }
        }
        timerDigit = current_time[4];
      },
      complete: () => {
      	timerFlag = false;
        var audio = new Audio('http://soundbible.com/grab.php?id=1919&type=mp3');
        audio.play();
        typeWriter('Bomb Detonated');
      }
    });
function typeWriter(txt) {
  var i = 0;
  var speed = 50;
  function typeWriterRec() {
    if (i === 0) {
      document.getElementById("word-card").innerHTML = '';
    }
    if (i < txt.length) {
      document.getElementById("word-card").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriterRec, speed);
    }
  }
  typeWriterRec();
}
document.getElementById('start').addEventListener('click', () => {
    if (!timerFlag){
    	underTenFlag = false;
      document.getElementById('clock').value = getRandomSubarray(timeVals, 1);
      timer.start(document.getElementById('clock').value);
      timerFlag = true;
    }
    typeWriter(getRandomSubarray(words, 1)[0]);
  });
document.getElementById('stop').addEventListener('click', () => {
		underTenFlag = false;
    timer.stop();
    typeWriter('Shall we begin?');
    document.getElementById('clock').value = '01:30';
    timerFlag = false
  });
