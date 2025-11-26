const trackLink = "https://open.spotify.com/track/";
const albumLink = "https://open.spotify.com/album/";
const artists = [
    {
        category: "opm",
        artists: [
            {
                name: "Kiyo",
                image: "opm/kiyo.png",
                description: 'Filipino rapper and musician Yukihiro Rubio is better known by his stage name Kiyo. His songs <a class="text-success" href="'+ trackLink +'5y6BAZxYtjqyAz4AiuQxTp" target="_blank">"Ikaw Lang"</a>, <a class="text-success" href="'+ trackLink +'4Vt1reORHK1qkDcEhE1JXd" target="_blank">"Eba"</a>, and <a class="text-success" href="'+ trackLink +'4t03pPBhaPAKpfgyrqgOBm" target="_blank">"Ano Na?"</a> are well-known.',
                spotifyId: "6gcteR920pLEynlHzjSRYd"
            },
            {
                name: "Cup of Joe",
                image: "opm/cupOfJoe.png",
                description: 'The Baguio-based Filipino pop rock group Cup of Joe was founded in 2018. They are signed to Viva Records and are well-known for songs like <a class="text-success" href="'+ trackLink +'7b89Ffklm3xh4GI37vlZDZ" target="_blank">"Tingin"</a> and <a class="text-success" href="'+ trackLink +'4cBm8rv2B5BJWU2pDaHVbF" target="_blank">"Multo"</a>.',
                spotifyId: "61nn6nOoLWjVC1ER2qFAvN"
            },
            {
                name: "Jan Roberts",
                image: "opm/janRoberts.png",
                description: "Jan Roberts is an Albay-born folk-pop singer-songwriter. Listeners of all ages can relate to Jan Roberts' hugot-centric songs on love and grief.",
                spotifyId: "0wuB9WlzVMNvwRJHope3ge"
            },
            {
                name: "Ben&Ben",
                image: "opm/benAndBen.png",
                description: "Ben&Ben is a multi-awarded Filipino band known for their anthemic sound and heartfelt themes, inspiring a generation with music that uplifts, reflects, and encourages self-discovery.",
                spotifyId: "4DAcJXcjX0zlQAZAPAx4Zb"
            },
            {
                name: "dilaw",
                image: "opm/dilaw.png",
                description: 'Dilaw began as a hip-hop duo and later expanded into a full indie rock group. They’re best known for their 2022 viral hit <a class="text-success" href="'+ trackLink +'47OFMuRu5lzJHRbtEXPBbs" target="_blank">“Uhaw (Tayong Lahat).”</a>',
                spotifyId: "6Dp4LInLyMVA2qhRqQ6AGL"
            },
            {
                name: "IV of Spades",
                image: "opm/ivos.png",
                description: 'IV of Spades is a Filipino rock band known for their funk-inspired sound and 1970s aesthetic, rising to mainstream fame with their 2018 hit <a class="text-success" href="'+ trackLink +'61vyXXtY7OSYFRtSzv5ehw" target="_blank">“Mundo.”</a>',
                spotifyId: "4k9wp4ipHdA1bu1T4x1ZTG"
            },
            {
                name: "The Ridleys",
                image: "opm/theRidleys.png",
                description: 'The Ridleys is an indie-folk band that blends heartfelt storytelling with electrifying performances. Formed in 2016, the band released their debut <a class="text-success" href="'+ trackLink +'5pek4R29HVwMaWgzpV64f3" target="_blank">"Aphrodite"</a>',
                spotifyId: "03KZ3tIgA3DSCU4o8PahVG"
            },
            {
                name: "Juan Karlos",
                image: "opm/juanKarlos.png",
                description: 'Juan Karlos Labajo is famous for being a Filipino singer, songwriter, and musician, particularly as the frontman for the band Juan Karlos and for his hit song <a class="text-success" href="'+ trackLink +'5f9808hpiCpuNyqqdXmpF2" target="_blank">"Buwan".</a>',
                spotifyId: "0a4r2EnsevvHCukoJ1xFwJ"
            },
            {
                name: "Eraserheads",
                image: "opm/eraserheads.png",
                description: "The Eraserheads are a pioneering Filipino rock band, often called the “Beatles of the Philippines,” who helped lead the 1990s rock movement.",
                spotifyId: "7374lH6kwx9uQATYQ9H3Cp"
            },
            {
                name: "Arthur Nery",
                image: "opm/arthurNery.png",
                description: 'Arthur Nery is famous for being a Filipino singer-songwriter known for his modern R&B and neo-soul music, particularly his hit single <a class="text-success" href="'+ trackLink +'0WZqHCoOBXqgCCIsUZLC2a" target="_blank">"Pagsamo".</a>',
                spotifyId: "7uDdl5V5AETSFY7K3muu22"
            }

        ]
    },
        
    {    
        category: "international",
        artists: [
            {
                name: "Luke Chiang",
                image: "international/lukeChiang.png",
                description: 'Luke\'s song <a class="text-success" href="'+ trackLink +'7F6PtLP6fJPVtA1FWVkl8K" target="_blank">"Shouldn\'t Be,"</a> which he published in 2019, immediately grabbed popularity.',
                spotifyId: "1dPSMH55yhvjYIwqCP4iDj"
            },
            {
                name: "The Weeknd",
                image: "international/theWeeknd.png",
                description: 'The Weeknd is famous for his distinctive blend of R&B and pop music, a soaring falsetto vocal style, and a string of successful hits like <a class="text-success" href="'+ trackLink +'0VjIjW4GlUZAMYd2vXMi3b" target="_blank">"Blinding Lights"</a> and <a class="text-success" href="'+ trackLink +'7fBv7CLKzipRk6EC6TWHOB" target="_blank">"The Hills".</a>',
                spotifyId: "1Xyo4u8uXC1ZmMpatF05PJ"
            },
            {
                name: "Keshi",
                image: "international/keshi.png",
                description: 'Keshi is a Vietnamese-American artist known for his soulful, introspective R&B that blends lo-fi, hip-hop, and indie. He rose to fame through his emotive tracks and gained wider recognition with his debut album <a class="text-success" href="'+ albumLink +'1WVIJaAboRSwJOe4u0n0Q7" target="_blank">Gabriel.</a>',
                spotifyId: "3pc0bOVB5whxmD50W79wwO"
            },
            {
                name: "Bruno Major",
                image: "international/brunoMajor.png",
                description: 'Bruno Major is famous for his intimate, jazzy-pop and R&B music, featuring poetic lyrics and emotive vocals. He is also known for his viral hit songs like <a class="text-success" href="'+ trackLink +'0RnxpSzxzwZgFQ0NahQr9K" target="_blank">"Easily"</a> and <a class="text-success" href="'+ trackLink +'1lORkxEMmsCZqhoxcmk3A3" target="_blank">"Nothing,"</a> and for his self-written and self-produced debut album, <a class="text-success" href="'+ albumLink +'3IGPQEGAiZZI4Iba81GNq5">"A Song For Every Moon".</a>',
                spotifyId: "0hDjKSKjl1DC7ovYTDJHe8"
            },
            {
                name: "Joji",
                image: "international/joji.png",
                description: "Joji is famous for his music career as a R&B and lo-fi hip-hop singer and record producer, but was previously known as the viral YouTuber Filthy Frank. ",
                spotifyId: "3MZsBdqDrRTJihTHQrO6Dq"
            },
            {
                name: "Niki",
                image: "international/niki.png",
                description: 'NIKI is an Indonesian singer-songwriter famous for her global music career, including hits like <a class="text-success" href="'+ trackLink +'68HocO7fx9z0MgDU0ZPHro" target="_blank">"Every Summertime,"</a> performing at major venues, and being a prominent artist signed to the record label 88rising.',
                spotifyId: "2kxP07DLgs4xlWz8YHlvfh"
            },
            {
                name: "The 1975",
                image: "international/the1975.png",
                description: "The 1975 is famous for their unique blend of genres, ranging from indie pop to synth-pop, their distinctive and often witty lyrics, and their constant artistic reinventions.",
                spotifyId: "3mIj9lX2MWuHmhNCA7LSCW"
            },
            {
                name: "Bruno Mars",
                image: "international/brunoMars.png",
                description: 'Bruno Mars is known for his catchy pop-R&B-funk hits, energetic retro-style performances, and versatile vocals, with hits like <a class="text-success" href="'+ trackLink +'32OlwWuMpZ6b0aN2RZOeMS" target="_blank">"Uptown Funk"</a> and <a class="text-success" href="'+ albumLink +'6b8Be6ljOzmkOmFslEb23P" target="_blank">"24K Magic."</a>',
                spotifyId: "0du5cEVh5yTK9QJze8zA0C"
            },
            {
                name: "Laufey",
                image: "international/laufey.png",
                description: 'Laufey is known for her jazz- and classical-inspired pop, rich alto voice, and viral social media success, with her 2023 album "<a class="text-success" href="'+ albumLink +'0pfpeTGQOWlGp6YUUbBD42" target="_blank">Bewitched</a>" winning a Grammy.',
                spotifyId: "7gW0r5CkdEUMm42w9XpyZO"
            },
            {
                name: "Phum Viphurit",
                image: "international/phumViphurit.png",
                description: 'Phum Viphurit is known for his 2018 hit <a class="text-success" href="'+ trackLink +'2rd4FH1cSaWGc0ZiUaMbX9" target="_blank">"Lover Boy"</a> and his breezy, genre-blending style of neo-soul, indie pop, and tropical funk, often called “hazy sunshine music.”',
                spotifyId: "5mqguTgtaoCMNMZD6txCh6"
            }
        ]
    }
];