title = 'Fearless'
block = false
tuning = 'F'
chord_shape = '(Chord shape in the key of D)'
capo_fret = '3'
spotify = 'https://open.spotify.com/embed/track/77sMIMlNaSURUAXq5coCxE?utm_source=generator&theme=1'
chords_music = ['D', 'A', 'Em', 'G', 'C9', 'E']
videoUrl = 'https://www.youtube.com/embed/D8fuCW9-vOc'
versions = [
    {
        id: '',
        name: 'Luca',
        difficulty: 'easy',
        contributions: []
    }
]

parts_cipher = [
    { type: 'progression',      id: 'intro' },
    { type: 'tabs',             id: 'intro' },

    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'alert',            id: 'repeatIntro' },
    { type: 'cipherLyrics',     id: 'afterFirstVerse' },

    { type: 'cipherLyrics',     id: 'secondVerse' },
    { type: 'cipherLyrics',     id: 'firstChorus' },
    { type: 'alert',            id: 'repeatIntro' },
    { type: 'cipherLyrics',     id: 'thirdVerse' },

    { type: 'cipherLyrics',     id: 'firstChorus' },

    { type: 'progression',      id: 'solo' },
    { type: 'tabs',             id: 'solo' },

    { type: 'progression',      id: 'bridge' },
    { type: 'cipherLyrics',     id: 'bridge' },

    { type: 'cipherLyrics',     id: 'secondChorus' },
    { type: 'cipherLyrics',     id: 'thirdChorus' },

    { type: 'cipherLyrics',     id: 'outro' },
]

progressions = [
    {
        id: 'intro',
        title: 'Main Progression | Intro 2x',
        caption: 'INTRO/VERSE',
        notes: ['D', 'A', 'Em', 'G'],
        progression: 'D - - - D - - - U U D - U D U -'
    },
    {
        id: 'solo',
        title: 'Solo 2x',
        caption: 'INTRO/VERSE',
        notes: ['Em', 'G', 'D', 'A'],
        progression: 'D - U D U - D - - - - - - - - -'
    },
    {
        id: 'bridge',
        title: 'Bridge 2x',
        caption: '2nd time from Em just play down',
        notes: ['C9', 'D', 'Em', 'D', 'G', 'A'],
        progression: 'L S - - L S - - L S - - L S - -'
    }
]

tabs = [
    {
        id: 'intro',
        title: 'Intro',
        tabs: [
            `E|----0--0---2-------0--0-2-3-2---0--0--2-5-3-2-0---|
            B|---3--3----------3--3----------3--3---------------|
            G|--------------------------------------------------|
            D|--------------------------------------------------|
            A|--------------------------------------------------|
            E|--------------------------------------------------|`,
            `E|----0--0---2-------0--0-2-3-2---0--0--2-5-3-5-3---|
            B|---3--3----------3--3----------3--3---------------|
            G|--------------------------------------------------|
            D|--------------------------------------------------|
            A|--------------------------------------------------|
            E|--------------------------------------------------|`
        ]
    },
    {
        id: 'solo',
        title: 'Solo',
        tabs: [
            `E|------------------------------------------------------|
            B|-5h6-6-6-6--6-6-6p5-5-3-------------------------------|
            G|------------------------3h5-3h5-5-3v------------------|
            D|-------------------------------------5/7-3------------|
            A|------------------------------------------------------|
            E|------------------------------------------------------|`,
            `E|------------------------------------------------------|
            B|--------------6-8p6-8b10r8p6-8v-8b10r8p6-9v-----------|
            G|----------5-7-----------------------------------------|
            D|-3--3/5-7---------------------------------------------|
            A|------------------------------------------------------|
            E|--------------------------------------------13/-------|`,
            `E|------------------------------------------------------|
            B|------------------------------------------------------|
            G|-----------------2b3r2-------------3/5-3-2-0--0-2-3v--|
            D|-----------0-3v--------3-------3v---------------------|
            A|---0-1v--3---------------3-1-0------------------------|
            E|-3----------------------------------------------------|`
        ]
    }
]

cipherParts = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        ignoreTitle: false
    },
    {
        id: 'afterFirstVerse',
        ignoreTitle: true
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        ignoreTitle: false
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        ignoreTitle: false
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        ignoreTitle: false
    },
    {
        id: 'thirdChorus',
        title: 'Chorus',
        ignoreTitle: false
    },
    {
        id: 'thirdVerse',
        title: 'Verse 3',
        ignoreTitle: false
    },
    {
        id: 'bridge',
        title: 'Bridge',
        ignoreTitle: false
    },
    {
        id: 'outro',
        title: 'Outro',
        ignoreTitle: false
    },
]

cipherLyrics = `
D 
 There's something 'bout the way
A                                Em 
 The street looks when it's just rained
                         G 
 There's a glow off the pavement
                    D 
 You walk me to the car
                      A                      Em 
 And you know I wanna ask you to dance right there
                        G         D   A
 In the middle of the parking lot, yeah
${ divider }
Em   G
 Oh, yeah
${ divider }
D
 We're drivin' down the road
A                Em
 I wonder if you know
                    G
 I'm trying so hard not to get caught up now
D
 But you're just so cool
 A                           Em
 Run your hands through your hair
                  G        A                                <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> DDDD</span>
 Absent mindedly making me want you
${ divider }
D                     A                   Em
 And I don't know how it gets better than this
                               G           A                <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> DD UD</span>
 You take my hand and drag me head first, fearless
D                     A                Em
 And I don't know why but with you I'd dance            
                   G           A                            <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> DD UD</span>
 In a storm in my best dress, fearless
${ divider }
D                       A                   Em
'Cause I don't know how it gets better than this
                               G           A                <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> strum *cut *strum *cut</span>
 You take my hand and drag me head first, fearless
D                     A                Em                   <span class="badge badge-info-cipher rounded-pill">Main Progression</span>
 And I don't know why but with you I'd dance                
                   G           A                            <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> DD UD</span>
 In a storm in my best dress, fearless
${ divider }
 D                       A                   Em
 'Cause I don't know how it gets better than this
                                G           A                <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> DD UD</span>
  You take my hand and drag me head first, fearless
 D                     A                Em
  And I don't know why but with you I'd dance            
                    G           A                            <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> DD UD</span>
  In a storm in my best dress, fearless
 D                     A                   Em
  And I don't know how it gets better than this
                                G           A                <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> DD UD</span>
  You take my hand and drag me head first, fearless
${ divider }
 D                   A                  Em
 So baby drive slow till we run out of road
                   G
 In this one horse town
                    D                       A
 I wanna stay right here in this passenger seat
                      Em
 you put your eyes on me
                    G             A                         <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> strum *cut *strum *cut</span>
 In this moment now capture it remember it
${ divider }
C9                         D
 Well, you stood there with me in the doorway
    Em               D       G        A
 my hands shake, I'm not usually this way
     C9                         D
 But you pull me in and I'm a little more brave
        Em                 D               G                
 It's a first kiss, it's flawless, really something         
A
 It's fearless
  D   A   Em      G
          Ohh..  Yeah
${ divider }
D     A
 Oh, oh
E        G 
 Oh-oh, yeah
`

tabs_parts = [,
    {
        'title': 'Riff intro',
        'caption': '',
    }
]

lyrics = `
[Verse 1]
There's something 'bout the way
The street looks when it's just rained
There's a glow off the pavement, you walk me to the car
And you know I wanna ask you to dance right there
In the middle of the parking lot, yeah
Oh, yeah

[Verse 2]
We're driving down the road, I wonder if you know
I'm trying so hard not to get caught up now
But you're just so cool, run your hands through your hair
Absent-mindedly making me want you

[Chorus]
And I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fеarless

[Verse 3]
So, baby, drive slow 'til we run out of road in this onе-horse town
I wanna stay right here, in this passenger's seat
You put your eyes on me
In this moment now, capture it, remember it
You might also like
You Belong With Me (Taylor’s Version)
Taylor Swift
Love Story (Taylor’s Version)
Taylor Swift
Fifteen (Taylor’s Version)
Taylor Swift
[Chorus]
'Cause I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fearless
Oh, oh

[Bridge]
Well, you stood there with me in the doorway
My hands shake, I'm not usually this way but
You pull me in and I'm a little more brave
It's the first kiss, it's flawless, really something
It's fearless
Oh, yeah

[Chorus]
'Cause I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fearless
'Cause I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fearless

[Outro]
Oh, oh
Oh-oh, yeah
`