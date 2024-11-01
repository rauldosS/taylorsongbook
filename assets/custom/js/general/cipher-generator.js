let cipher = undefined

selectMusic = (selectedMusicId) => {
    resetConfig()

    btnHome.css({ 'display': 'inline-block' })
    cipherWrapper.show()
    music = musics[selectedMusicId]
    cipherContent.empty()

    hideContent()
    resertToolbar()
    cipherContent.hide()

    createAlbumCSS(music.album)
    createCipherJS(music.album, music.id)

    loadCipher(music.id, music.album)

    cipherContent.show()

    scrollTop()

    toolbar.show()
    miniPlayer.show()

    toolbar.show()
    miniPlayer.show()

    if ($(window).width() < 768 && $('#sidebar').width() > 250) {
        $('#sidebar').toggleClass('toggled')
    }
}

resetConfig = () => {
    progressionsHtml = {}
    tabsHtml = {}
    cipherLyricsPartsHtml = {}
    cipherLyricsColumnsPartsHtml = {}
    const partsCipher = []
    completeCipher = []
    completeCipherColumns = []

    const tabs = []

    const basicCipher = false
}

hideContent = () => {
    $('#content').hide()
}

hideCipherWrapper = () => {
    cipherWrapper.hide()
    toolbar.hide()
    cipherContent.hide()
    miniPlayer.hide()
}

createAlbumCSS = (album) => {
    cipherContent.prepend(`<link href="/assets/custom/css/albuns/${ album }.css" rel="stylesheet">`)
}

createCipherJS = (album, music) => {
    cipherContent.prepend(`<script src="/assets/custom/js/albuns/${ album }/${ music }.js"></script>`)
}

createCipherCapoHTML = () => {
    if (capoFret) {
        if (language.code === 'pt-BR') {
            return capoFret ? language.cipher.capo[0] + capoFret + language.cipher.capo[1] : ''
        } else {
            return `Capo: <b>${ capoFret }` + (capoFret > 3 ? 'th' : language.cipher.capo[capoFret]) + '</b> fret'
        }
    } else {
        return ''
    }
}

createCipherHeaderHTML = (album) => {
    capo = createCipherCapoHTML()
    cipherContent.append(
        `<div id="cipher-header" class="animate__animated animate__fadeIn">
            ${ basicCipher ? '<span class="badge bg-' + album + ' mb-3">' + language.cipher.basicCipher + '</span>' : '' }
            <h1 class="title">${ musicTitle }</h1>
            <span class="cipher-tone">${ language.cipher.tuning }: <b>${ tuning }</b> ${ const chordShape ? '(' + language.cipher.const chordShape + ' ' + const chordShape + ')' : '' }</span>
            <span class="song-capo">
                ${ capo }
            </span>
            <iframe style="border-radius:12px" src="${ const spotify }" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    `)
}

createChordsHTML = () => {
    cipherContent.append(
        `<div id="chords" class="bd-callout bd-callout-info text-black-50 fw-normal position-relative">
            <div>
            </div>
            <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-album">
                Chords
            </span>
        </div>`
    )
    chordsMusic.forEach(chord => {
        cipherContent.find('#chords div').append(chordsHtml[chord])
    })
    ChordJS.replace()
}

createArrowsProgression = (baseProgression, changeChord = null, const palmMute = false, blocking = false) => {
    let chordChange = false
    let chordChangeColor = false
    return baseProgression.split(' ').map((progression, i, {length}) => {
        if (progression === 'D') {
            return `<i class="fa-solid fa-arrow-down-long 
                ${ palmMute ? 'palm-mute' : '' } 
                ${ blocking ? 'blocking' : '' } 
                ${ chordChangeColor ? 'chordChange' : '' }"
                ${ chordChange ? 'note=" ' + changeChord + ' "' : ''}
            ></i> `
        }
        if (progression === 'd-highlight') {
            return `<b class="highlight"><i class="fa-solid fa-arrow-down-long 
                ${ palmMute ? 'palm-mute' : '' } 
                ${ blocking ? 'blocking' : '' } 
                ${ chordChangeColor ? 'chordChange' : '' }"
                ${ chordChange ? 'note=" ' + changeChord + ' "' : ''}
            ></i></b> `
        }
        chordChange = false
        if (progression === 'U') return `<i class="fa-solid fa-arrow-up-long 
            ${ palmMute ? 'palm-mute' : '' } 
            ${ blocking ? 'blocking' : '' } 
            ${ chordChangeColor ? 'chordChange' : '' }"
            ${ chordChange ? 'note=" ' + changeChord + ' "' : ''}
        ></i> `
        if (progression === 'u-highlight') return `<b class="highlight"><i class="fa-solid fa-arrow-up-long 
            ${ palmMute ? 'palm-mute' : '' } 
            ${ blocking ? 'blocking' : '' } 
            ${ chordChangeColor ? 'chordChange' : '' }"
            ${ chordChange ? 'note=" ' + changeChord + ' "' : ''}
        ></i></b> `
        if (progression === '-') return `<span class="strum">${ progression }</span> `
        if (progression === 'break') return `<br>`
        if (progression === 'block') return '<i class="fa-solid fa-ban strum"></i> '
        chordChange = progression === 'chordChange'
        chordChangeColor = progression === 'chordChange'
        return ''
    }).join('')
}

createNotes = (notes) => {
    let chordChange = false

    return notes.map((note) => {
        if (note === 'doubleBreak') return `<br><br>| `
        if (note === 'break') return `<br>| `
        if (note === 'block') return '<i class="fa-solid fa-ban strum"></i> |'
        if (note === '...') return `<b>...</b>`
        if (note.includes('x')) return `<b class="color-red">${ note }</b>`
        if (note.includes(',')) {
            return note.split(',').map((n, i, {length}) => {
                if (chordChange) return `<b class="chordChange">${ n }</b> ${ i + 1 === length ? ' | ' : '' } `
                if (n === ' chordChange') {
                    chordChange = true
                    return ''
                } else chordChange = false
                return `<b>${ n }</b> ${ i + 1 === length ? ' | ' : '' } `
            }).join('')
        }
        return `<b>${ note }</b> | `
    }).join('')
}

getMultipleProgressionsTable = (notes, progressions, marginNotes) => {
    let notesHTML = ''
    let progressionsHTML = ''

    Array(notes.length).fill(0).map((_, i) => {
        notesHTML = notesHTML.concat(`<th class="color-album" scope="col">${ notes[i] }</th>`)
        progressionsHTML = progressionsHTML.concat(`<td>${ createArrowsProgression(progressions[i]) }</td>`)
    })

    return `<table class="table table-bordered progression-table ${ marginNotes ? '' : 'mb-0' }">
        <thead>
            <tr>
                <th class="bg-album text-white" scope="col">CHORD</th>
                ${ notesHTML }
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="bg-album text-white" scope="row">STRUM</th>
                ${ progressionsHTML }
            </tr>
        </tbody>
    </table>`   
}

createProgressionHTML = () => {
    progressions.forEach(progression => {
        // multipleProgression = progression.notesMultipleProgression !== undefined
        notes = progression.notes !== undefined ? createNotes(progression.notes) : ''
        multipleProgressionTable = progression.notesMultipleProgression !== undefined ? getMultipleProgressionsTable(
            progression.notesMultipleProgression,
            progression.multipleProgression,
            progression.notes !== undefined
        ) : ''

        arrowProgression = progression.progression !== undefined ? createArrowsProgression(
            progression.progression,
            progression.chordChange !== undefined ? progression.chordChange : null,
            progression.palmMute !== undefined,
            progression.blocking !== undefined
        ) : ''

        repeat = progression.repeat !== undefined ? `<div class="repeatChord">
            ${ progression.repeat }
        </div>` : ''

        progressionsHtml[progression.id] = `
            <div id="progression-${ progression.id }" class="bd-callout bd-callout-info text-black-50 fw-normal position-relative progressions">
                ${ multipleProgressionTable }
                <div class="d-flex justify-content-between ps-1 pe-1">
                    <div>
                        <div>${ notes ? '|' : '' } ${ notes }</div>
                        <div>
                            <div class="">${ progression.caption }</div>
                        </div>
                    </div>
                    ${ repeat }
                    <div class="d-flex align-items-center text-start ms-auto">
                        <div class="fw-bold strumming">${ arrowProgression }</div>
                    </div>
                </div>
                <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-album">${ progression.title }</span>
            </div>
        `
    })
}

createTabsHTML = () => {
    tabs.forEach(data => {
        let callout = '<div class="bd-callout bd-callout-info fw-normal position-relative tabs">'

        data.tabs.forEach(tab => {
            callout = callout.concat(`<div class="tab">${ tab }</div>`)
        })

        callout = callout.concat(
            `<span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-album">${ data.title }</span>`,
            '</div>'
        )

        tabsHtml[data.id] = callout
    })
}

createCipherLyricsHTML = () => {
    cipherLyricsList = cipherLyrics.split(divider)

    cipherParts.forEach((part, index) => {
        cipherLyricsPartsHtml[part.id] = part.ignoreTitle !== undefined ? `<pre type="lyrics">
            ${ cipherLyricsList[index] }
            </pre>` : `<pre type="lyrics">
<a
    onclick="scrollToElement('#progression-${ part.referenceProgression.id }')"
    data-toggle="tooltip"
    data-bs-placement="right"
    data-bs-html="true"
    title="Progression <i class='fa-solid fa-arrow-right-long ms-2 me-2'></i> ${ part.referenceProgression.title }"
    class="title-part-cipher"
>[${ part.title }]</a>
            ${ cipherLyricsList[index] }
            </pre>`

        cipherLyricsColumnsPartsHtml[part.id] = part.ignoreTitle !== undefined ? `${ cipherLyricsList[index] }` : `
<a
    onclick="scrollToElement('#progression-${ part.referenceProgression.id }')"
    data-toggle="tooltip"
    data-bs-placement="right"
    data-bs-html="true"
    title="Progression <i class='fa-solid fa-arrow-right-long ms-2 me-2'></i> ${ part.referenceProgression.title }"
    class="title-part-cipher"
>[${ part.title }]</a>
            ${ cipherLyricsList[index] }`
    })
}

function replaceWholeChordsInLines() {
    replacements_chords = chordsMusic.map(chord => {
        return { searchValue: chord, replaceValue: `<b>${ chord }</b>` }
    }).reverse()

    for (replacement of replacements_chords) {
      { searchValue, replaceValue } = replacement
      regex = new RegExp(`\\b${searchValue}\\b`, 'g')
      cipherLyrics = cipherLyrics.replaceAll(regex, replaceValue)
    }

    return cipherLyrics
}

createChordColumns = () => {
    cipherContent.append(`<div id="cipher-columns" class="mt-3">
        <pre type="lyrics"></pre>
    </div>`)

    cipherColumnsPre = $('#cipher-columns pre')

    completeCipherColumns.forEach(part => {
        cipherColumnsPre.append(`<div class="border-column pb-2 pt-2">${ part }</div>`)
    })
}

createLyrics = () => {
    cipherContent.append(`
        <div id="lyrics" class="mt-3">
            <pre type="only-lyrics">${ lyrics }</pre>
        </div>
    `)
}

updateShareLink = () => {
    $('#share-cipher').attr('data-clipboard-text', `https://taylorsongbook.com.br?music=${musicId}`)
}

loadCipher = (music, album) => {
    createCipherHeaderHTML(album)
    createChordsHTML()

    createProgressionHTML()
    createTabsHTML()

    replaceWholeChordsInLines()

    createCipherLyricsHTML()

    partsCipher.forEach(part => {
        switch (part.type) {
            case 'progression':
                completeCipher.push(progressionsHtml[part.id])
                break
            case 'tabs':
                completeCipher.push(tabsHtml[part.id])
                break
            case 'cipherLyrics':
                completeCipher.push(cipherLyricsPartsHtml[part.id])
                completeCipherColumns.push(cipherLyricsColumnsPartsHtml[part.id])
                break
            case 'alert':
                completeCipher.push(alertsHtml[language.code][part.id])
                break
        }
    })

    cipherContent.append(`<div id="cipher"></div>`)
    cipher = $('#cipher')

    completeCipher.forEach(part => {
        cipher.append(part)
    })

    createChordColumns()
    createLyrics()
    updateShareLink()

    $('[data-toggle=tooltip]').tooltip({
        trigger : 'hover'
    })

    $('#mini-player iframe').attr('src', videoUrl)

    setLoading(false, 1300)
}
