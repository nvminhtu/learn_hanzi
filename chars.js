chars = [
['0','一','one','photo','one.jpg','"One" is represented by a single horizontal line, possibly representing a single outstretched finger.'],
['1','亠','lid','photo','lid.jpg','"Lid" is a horizontal line topped with a small vertical dash, like a handle on a pot lid.'],
['2','冖','cover','photo','cover.jpg','"Cover" is a horizontal line with two small vertical lines hanging from each side, like a tablecloth covering a table.'],
['3','宀','roof','photo','roof.jpg','"Roof" looks like a combination of "lid" (亠) and "cover" (冖), but now the handle stands for the peak of a roof or a chimney, and the sides are eaves.'],
['4','立','stand','photo','stand.jpg','"Stand" represents a person standing, but that is clearer in earlier versions of the character. The horizontal lines describe the shoulders and the ground, the dash on top is the head, and the two long vertical lines outline the torso. It may be easier, however, to imagine it as a pot or vase standing on a table.'],
['5','穴','cave','photo','cave.jpg','The "cave" character is composed of roof (宀) with two curved horizontal lines on either side representing the walls of the cave.'],
['6','厂','cliff','photo','cliff.jpg','"Cliff" is drawn as a horizontal line with a slightly curved vertical line hanging down from the left, like the edge of a cliff.'],
['7','广','house on a cliff','photo','house_on_a_cliff.jpg','The character for "house on a cliff" looks just like "cliff" (厂) but with a dot on top representing a house.'],
['8','疒','sickness','oracle bone inscription','sickness.jpg','"Sickness" looks like "house on cliff" (广) with two additional dashes on the left, but the words have very different meaings and histories. The character for sickness represents a sick person sweating, possibly from a fever. Earlier versions of the character had a stretcher or bed drawn to the left of the figure. '],
['9','石','stone','photo','stone.jpg','"Stone" shows a stone beneath a cliff (厂), though the cliff has become somewhat abstracted and looks a little different than in other characters.'],
['10','厶','private','drawing','private.jpg','The character for "private" looks like a triangle where the right side does not connect with the top point. It may be helpful to imagine it as a single-person tent, which is a private space.'],
['11','人','person','drawing','person.png','The character for "person" depicts the torso and legs of a person standing or walking. In earlier versions, the person shown also had arms.'],
['12','彳','step','photo','step.jpg','The character for "step" looks like the side view version of "person" (亻) but the diagonal line is added again on top. One way to remember this character is that the top diagonal line indicates the person is in motion, bobbing up and down with every step. '],
['13','欠','yawn','photo','yawn.jpg','The image for "yawn" is described as a person bent over with their mouth open, possibly yawning or spitting. It my be easier, though, to see it as two characters: "person" (人) and a bed floating above, which the person is thinking about because he or she is lacking sleep and therefore yawning.'],
['14','火','fire','photo','fire.jpg','The character for "fire" looks like a campfire with two little flames or sparks on either side.'],
['15','大','big','photo','big.jpg','"Big" is illustrated as "person" (人) with his or her arms outstretched as if describing something very large.'],
['16','犬','dog','photo','dog.jpeg','The character for "dog" is "big" (大) with a dash in the upper right representing an ear. It may be useful to imagine that we are viewing the dog from the front and that the dash is the tail wagging in the air behind it.'],
['17','木','tree','photo','tree.jpg','"Tree" is shown as a very simplified version with the horizontal line is the earth, the lines below are the roots, and the top of the vertical line is the tree as seen above ground. In older versions of the character, the top and bottom of the tree were mirror images of each other.'],
['18','禾','grain','bronze inscription','grain.svg','"Grain" is represented by a tree (木) with an additional horizontal line on top.'],
['19','米','rice','oracle bone inscription','rice.svg','"Rice" is made from combining "tree" (木) with two additional dashes (in the upper left and in the upper right) representing grains of rice. Early versions of this character show grains of rice growing on the plant. Later on, the plant was replaced with the character for tree.'],
['20','糸','silk','small seal inscription','silk.svg','The character for "silk" is composed of two silk cocoons above a spindle that\'s used to twist the silk into thicker strands. Another interpretation is that the strings at the bottom are silk strands being pulled from the cocoon.'],
['21','小','small','photo','small.jpg','There are two popular interpretations of this character: a person with their arms lowered to describe something small, and an object cut into two small pieces by a knife.'],
['22','示','show','photo','show.jpg','"Show" looks like a shortened version of "small" (小) with two horizontal lines on top. The lower component in this character actually represents an altar and the horizontal line above it is the object being presented.'],
['23','心','heart','large seal script','heart.svg','"Heart" is drawn with a ladle-like shape representing the organ itself and three lines surrounding the organ. They once showed the atriums of the heart but now look more like blood moving through its circuitry.'],
['24','匕','spoon','photo','spoon.jpeg','The character for "spoon" shows an eating utensil with two prongs. However, it may be easier to remember if you see it as a ladle with the diagonal line as the arm of the person holding it.'],
['25','水','water','large seal script','water.svg','"Water" is shown as a flowing river. It may help to imagine the central vertical line as the river and the strokes on either side as a canyon that that river flows through.'],
['26','氷','ice','photo','ice.jpg','"Ice" looks just like the character for "water" (水) but with an added dash in the top left.'],
['27','八','eight','oracle bone inscription','eight.svg','"Eight" is represented by two bent lines that signal divide. Eight is the single-digit number that can be divided by two the greatest number of times.'],
['28','儿','legs','photo','legs.jpg','"Legs" is shown as two vertical lines that curve outwards at the bottom. The right leg curls around to resemble a foot.'],
['29','几','table','photo','table.jpg','The character for "table" is composed of "legs" (儿) with a horizontal line on top like a table\'s surface.'],
['30','勹','wrap','bronze inscription','wrap.svg','The character for "wrap" looks the right half of a box attaching to something on the left. It may represent a womb wrapping around and embracing the characters placed within.'],
['31','刀','knife','photo','knife.jpg','The character for "knife" is an illustration of a knife where the vertical lines outline the blade. The horizontal line used to be the handle but has since been shortened.'],
['32','力','power','bronze inscription','power.svg','"Power" looks like "knife" (刀) but the left vertical line extends a little higher above the horizontal handle. Historically, the character for "power" was actually an arm.'],
['33','方','square','photo','square.gif','"Square" looks like "power" (力) with a "lid" (亠) on top. One interpretation is that the character represents a plow (a contained source of power or force) that you can direct around a square field.'],
['34','巾','turban','photo','turban.jpg','This character shows a long cloth draped over something and hanging down at equal lengths. It could be a scarf or a cloth that will be wrapped around the head into a turban, or it could also be seen as an image of a turban after it\'s been wrapped with the vertical line representing a fold.'],
['35','门','gate','photo','gate.jpg','"Gate" looks like "turban" (巾) except the center line is much shorter. The traditional version of this character (門) looks like the doors of a saloon, but the details of the doors have been removed in the simplified format.'],
['36','雨','rain','oracle bone inscription','rain.svg','"Rain" shows a horizontal line representing a cloud with sheets of tain pouring down beneath it.'],
['37','羽','feather','large seal script','feather.gif','"Feather" is represented by two curved wings.'],
['38','卩','seal','photo','seal.jpg','The "seal" character represents a person kneeling as if before a high government official (the kind of person that has their own seal).'],
['39','尸','corpse','photo','corpse.jpg','Originally meaning "to be idle", the character for "corpse" represents a person sitting.'],
['40','戶','door','photo','door.jpg','"Door" is represented with the left half of "gate", but this form is slightly more complex than the simplified version of "gate" (门) while also slightly less decorated than the traditional form of "gate" (門). '],
['41','斤','axe','large seal script','axe.svg','"Axe" is represented by an axe chopping a piece of wood. The wood is the vertical line in the bottom right, and the two horizontal lines form the blade.'],
['42','口','mouth','photo','mouth.jpeg','The characters for "mouth, opening" and "enclosure" are actually different, but appear the same. If the square is surrounding the character, it means "enclosure". If it is next to or inside other characters, it means "mouth, opening".'],
['43','言','speech','photo','speech.jpeg',' "Speech" (言) depicts a mouth (口) with sound waves being projected upwards.'],
['44','酉','wine','photo','wine.jpg','"Wine" looks like "table" (几) partially inside an enclosure (囗), but it\'s actually a drawing of an ancient vase. You could choose to see it as an up-close look at the mouth of a wine bottle with the stopper visible from the outside.'],
['45','日','sun','bronze inscription','sun.svg','Originally drawn as a circle with a dot in the center, the character for "sun" has become a tall rectangle with a line through the center, which looks a lot like a window through which one can see the sun.'],
['46','白','white','large seal script','white.svg','Drawn originally as an acorn (but with a different meaning), this character became associated with the white color of the acorn\'s flesh. Over time it\'s shape changed to mimic "sun" (日), but the stem of the acorn remains as a dash on top.'],
['47','月','moon','bronze inscription','moon.svg','The first known versions of this character depict a crescent moon, but like most characters in Chinese writing, it has become more rectangular over the centuries.'],
['48','夕','evening','large seal script','evening.svg','"Evening" is represented with a curved crescent moon. Note the similarity with (or the difference from) "moon" (月)  which is also an abstracted crescent moon. Perhaps one way to keep them apart is to think of "evening" (夕) as a "moon" (月) that has not fully formed because the day is not yet fully done.'],
['49','肉','meat','large seal script','meat.svg','"Meat" looks like two "person" characters (人) in an container, but the symbols inside are actually ribs and the container is the torso of an animal.'],
['50','目','eye','bronze inscription','eye.svg','"Eye" is shown as a very simplified drawing of an eye, turned 90 degrees onto its side. The two horizontal lines are the edges of the iris. Early versions of this character were more literal, but it became simpler and economical over time.'],
['51','艮','blunt','photo','blunt.jpg','"Blunt" is composed of "eye" (目) with two horizontal lines instead of three, and "spoon" (匕) though it is abstracted an looks a bit different here. One way to remember this is that a spoon is so obviously blunt that you can see it.'],
['52','食','eat','photo','eat.jpg','"Eat" looks like "blunt" (艮) with a person (人) on top. In "eat", the square with a horizontal line through it actually represents a cooking pot, so the character portrays a person with a spoon preparing a meal.'],
['53','耳','ear','small seal inscription','ear.svg','The character for "ear" is a very simplifie, body drawing of a human ear. The resemblance is easier to see in earlier versions of the character where the outer edge is rounded.'],
['54','皿','dish','photo','dish.jpg','"Dish" is drawn as a horizontal rectangle with two vertical lines inside. It may be helpful to imagine that it is a shallow wooden bowl and the vertical lines are the grain of the wood.'],
['55','田','field','photo','field.jpg','"Field" is an enclosure (囗) divided neatly into cultivated fields.'],
['56','网','net','drawing','net.gif','"Net" is drawn as a three-sided box (missing the bottom edge) containing two \'X\'s, which resemble the criss-cross pattern of a net.'],
['57','见','see','large seal script','see.svg','The traditional form of "see" is composed of "eye" (目) and "legs" (儿) to depict a giant eye on human legs, or a person seeing. The simplified version, the eye had been reduced to a box.'],
['58','贝','shell','photo','shell.jpg','The rectangle with here represents a shell and the lines inside can be seen as the mollusk inhabiting the shell or as the opening of the shell as it curves inwards.. The cowrie shell was a form of currency in ancient Asia, so this character often represents money when used in more complex characters. Be careful not to confuse this one with "see" (见) in which the figure\'s right leg curves around the outside of the box like a big shoe with a pointed tip. The bottom right stroke in "shell" is straight.'],
['59','页','page','photo','page.jpg','Originally this character meant "head", and it sometimes returns to that meaning when used as a component in more complex characters. On its own, however, it has come to mean "page". For this meaning to make sense, it may be helpful to remember that a shell once meant money, which is now represented by rectangular pieces of paper, like the pages in a book. The extra horizontal line on top is the spine holding the pages together.'],
['60','舟','boat','photo','boat.jpg','The character for "boat" looks like a view from above of two people rowing a small boat with the oar between them.'],
['61','十','ten','large seal script','ten.svg','"Ten" was originally drawn as a single vertical line, but later a horizontal line was added in the middle. One way to rememeber this character is that it looks like a "t", which is the first letter in the word "ten".'],
['62','土','earth','bronze inscription','earth.svg','The character for "earth" represents a lump of clay on a potter\'s wheel. You can also interpret it as something growing out of the ground or something placed in the earth, such as a cross.'],
['63','里','village','photo','village.jpg','The character for "village" is composed of "field" (田) + "earth" (土). Where the earth is divided into fields, there is a village.'],
['64','士','scholar','drawing','scholar.jpg','"Scholar" looks like "earth" (土) but the upper horizontal line is longer. Remember that "earth" can also mean "peasant" and a scholar has a broader, more important stature.'],
['65','青','green','drawing','green.jpg','The top section of "green" looks like "earth" (土) with an additional horizontal line, and the bottom section looks a bit like "moon" (月). The top element (生) actually represents a plant, and the bottom part (丹 means "dye" or "color" - together they mean the color of plants, or "green", but the character can also mean "blue". Perhaps an easier way to remember this character is to imagine the bottom part is moon (月), and when it shines on plants (生) they can appear green or blue.'],
['66','止','stop','photo','stop.jpg','The character for "stop" is a very simplified and angular image of a left foot, seen from below, with the heel resting on the ground. But because it may be hard to remember that this means "stop" (and not "foot"), it may be more helpful to imagine that the left vertical ine is a person and the right vertical line is a sign that the person is stopped at (either a stop sign or a sign at a crossroads).'],
['67','足','foot','drawing','foot.jpg','"Foot" is formed from the character for "stop" (止), but the left vertical line and bottom horizontal line now look like "person" (人), and it is topped with a square (like "mouth" (口)). One way to remember this one is that it kind of looks like a boot with the toe pointed to the right, and the square on top is the pant cuff.'],
['68','辵','walk','drawing','walk.jpg','"Walk" looks like "foot" (足) but the square on top has been replaced with three curved horizontal lines, which can be interpreted as motion lines as the foot is being.'],
['69','走','run','drawing','run.jpg','"Run" looks like "walk" (辵), but now the curved motion lines are straight indicating even faster motion.'],
['70','山','mountain','bronze inscription','mountain.svg','Originally drawn as three pointed peaks, "mountain" has been simplified to three vertical lines attached to a horizontal ground plane.'],
['71','屮','sprout','photo','sprout.jpg','"Sprout" looks like "mountain" (山) with the central vertical line extended down. It represents a small plant with two leaves.'],
['72','艸','grass','photo','grass.jpg','"Grass" is composed of two "sprout" (屮) characters.'],
['73','竹','bamboo','drawing','bamboo.jpg','"Bamboo" shows two stalks of bamboo with a few leaves attached to the top.'],
['74','工','work','photo','work.jpg','The character for "word" looks like a big capital \'I\'. It may be based on ancient Chinese carpentry tools, such as the traditional bow saw or carpenter\'s square.'],
['75','王','king','oracle bone inscription','king.svg','"King" looks like "work" (工) with an additional horizontal line across the center. They say there are three levels: heaven (the top), mankind (the middle), and earth (the bottom). The vertical line that connects all three in harmony is the king. Another interpretation is that the character represents an axe, which was a symbol of the king\'s power. Early versions of the character look like a really tall, important person standing on the earth. Over time the legs were combined into one line and the top level was added.'],
['76','金','gold','photo','gold.jpg','"Gold" looks like "king" (王) with a person (人) on top and two extra vertical lines between the middle and bottom horizontal lines. It actually represents an ancient bell which was made of gold.'],
['77','干','dry','photo','dry.jpg','The character for "dry" looks like a \'T\' with a second, longer horizontal line across the middle. One way to remember this is that clothes lines are often attached to a two big T-shaped structures. When viewed from the side, the two T\'s overlap to create one shape with two horizontal lines. Just remember that the top horizontal line is shorter than the lower one.'],
['78','手','hand','photo','hand.jpg','The character for "hand" is a very simplified drawing of a hand. The vertical line at the bottom is the arm, the two straight horizontal lines make up four fingers - two on each side - and the top horizontal line represents the middle finger, which is bent.'],
['79','舌','tongue','photo','tongue.jpeg','The bottom element of "tongue" is "mouth" (口). The top half is thought to have originally meant a forked tongue or a forked weapon. It also looks similar to the top half of "hand" (手), which may be helpful for remembering the meaning because a tongue is like the mouth\'s version of a hand.'],
['80','牛','cow','drawing','cow.jpg','The character for "cow" was originally a cross with a half-circle shape on top representing a cow\'s horns. Over time the half-circle was reduce to a horizontal line with a diagonal dash on the left edge. That asymetry makes the character more similar in shape to a cow from the side than from the front.'],
['81','羊','sheep','bronze inscription','sheep.svg','The image for "sheep" represents a sheep\'s head viewed from the front. The horizontal lines are the top of the head, the eyes, and the bottom of the head while the two angled lines on top are the horns.'],
['82','辛','bitter','small seal inscription','bitter.svg','The image for "bitter" represents some sort of tool, possibly one used for torture or tattooing of slaves in ancient China. However, another interpretation is that it is a pestle. It is often associated with negative feelings like guilt and even fiery hot flavor.'],
['83','又','right hand','bronze inscription','right_hand.svg','"Right hand" was originally drawn as a claw-like hand with three easy-to-see fingers. Those basic components are still present in the modern version, but it is harder to recognize now that the middle and right fingers are connected by a horizontal line on top.'],
['84','攵','tap','drawing','tap.jpg','"Tap" is made from "right hand" (又) with a diagonal line attached on the top left corner and the horizontal line on top extends further to the right. The added diagonal represents a stick the hand is holding, but it could also be seen as a surface that the hand is tapping against.'],
['85','夂','go','small seal inscription','go.svg','"Go" looks like "tap" (攵) with a shorter horizontal line, but the two characters have very different histories and meanings. The character for "go" actually represents a foot pointed downwards (so the horizontal line is the back of the foot and the bottom of the character is the front).'],
['86','殳','weapon','small seal inscription','weapon.svg','"Weapon" shows a "right hand" (又) holding some kind of tool. The tool looks like "table" (几), but it may be easier to remember the meaning of this character if you see it as "knife" (刀), which looks very similar.'],
['87','皮','skin','small seal inscription','skin.svg','"Skin" is depicted by a right hand (又) cutting the skin or fur off an animal with a knife. The vertical line on top is the knife and the two strokes that look like "cliff" (厂) is the skin.'],
['88','女','woman','oracle bone inscription','woman.svg','The character for "woman" shows a figure kneeling or bowing.'],
['89','戈','halberd','bronze inscription','halberd.svg','A halberd is an axe head on a long pole. Here the diagonal line aiming down and to the right is the handle or shaft of the weapon, and the two lines crossing it and meeting in the top right make up the blade.'],
['90','衣','clothes','drawing','clothes.jpg','The image for "clothes" is a rough drawing of an ancient Chinese tunic. The dash on top is a collar, the horizontal line is for the shoulders, the sweeping lines are the sleeves, and the vertical line is where the tunic closes. That is easier to see in the character\'s earlier versions, which are more literal.. '],
['91','马','horse','oracle bone inscription','horse.svg','The character for "horse" is a very abstracted drawing of a side view of a horse that is running to the left. It is easier to see in the traditional form (馬), which still has the feet (the four vertical dashes on the bottom), the tail (which hangs down on the right), and the mane (shown in the three horizontal lines to the right of the head). The horizontal line above the feet is the horse\'s back. In the simplified form, the legs have been replaced by a single horisontal line, and all that is left of the head and main is a single square.'],
['92','鸟','bird','oracle bone inscription','bird.svg','"Bird" is very similar to "horse" (马) but with an added eye and a dash on the head for feather or plume.'],
['93','弓','bow','photo','bow.jpg','Originally resembling a typical doodle of a recurve bow, including the string, the character for "bow" is now much more boxy and the curve of the bow has been exaggerated to create a backwards \'S\'.'],
['94','子','child','bronze inscription','child.svg','"Child" is depicted as a baby with its arms out but it\'s legs hidden in swaddling clothes.'],
['95','寸','inch','large seal script','inch.svg','"Inch" is yet another image of a hand. This time it is so simplified that only the stumbs of the fingers remain atop the vertical arm. The dash on the left represents a finger pointing to the pulse of the arm, which is found about an inch from the hand.'],
['96','车','vehicle','photo','vehicle.jpg','The traditional form of "vehicle" (車) is a drawing of a simple card from above. The vertical line is the axel, the horizontal lines on the top and bottom are the wheels, and the square with a hozirontal line through it is the carriage. In the simplified form (车), the rectangular carriage has been replaced by two lines connected to suggest a triangle.'],
['97','虫','insect','photo','insect.jpg','This character represents a partially-coiled snake, which was the original meaning, but over time it was come to mean "insect", which snakes eat. It may be easier to imagine that the character portrays an insect perched on a blade of grass sticking out from the ground.'],
['98','阜','mound','photo','mound.jpg','"Mound" looks like a pile of stones piled up on the earth.'],
['99','邑','city','photo','city.jpg','"City" looks like an "enclosure" (囗) above a person kneeling (similar to "seal" - 卩) because a city is a group of people in a specified space who have a form of government that they obey.'],
['100','隹','short-tailed bird','photo','short-tailed_bird.jpg','"Short-tailed bird" looks like "person" (亻) next to "king" (王) with an extra horizontal line and a dash on top. The history of the character is not actually related to either of those characters and developed separately. The character is a simplified drawing of a bird pointing to the left with its wing extended to the right. Note that, unlike "bird" (鳥), "short-tailed bird" has no tail in the pictogram.']
];