import React, { useEffect, useRef } from 'react'

const DrumPad = () => {

  const audioElements = useRef([])
  const buttonElements = useRef([])

  useEffect(() => {
    document.addEventListener('keydown', e => {

      const obj = {}
      const keys = [
        '1','2','3','4',
        'q','w','e','r',
        'a','s','d','f',
        'z','x','c','v',
      ]

      // Map audio elements to keyboard
      keys.forEach((el, i) => {
        obj[el] = () => {
          buttonElements.current[i].click()
          buttonElements.current[i].classList.add('active')
        }
      })
      if (obj[e.key]) obj[e.key]()
    })

    document.addEventListener('keyup', e => {
      const obj = {}
      const keys = [
        '1','2','3','4',
        'q','w','e','r',
        'a','s','d','f',
        'z','x','c','v',
      ]

      // Map audio elements to keyboard
      keys.forEach((el, i) => {
        obj[el] = () => {
          buttonElements.current[i].classList.remove('active')
        }
      })
      if (obj[e.key]) obj[e.key]()
    })
  }, [])

  const drumSounds = [
    
    {
      name: 'Kick 1',
      character: '1',
      file: require('../assets/audio/Kicks/Drum Kit Kick.wav'),
    },
    {
      name: 'Snare 1',
      character: '2',
      file: require('../assets/audio/Snares/Bottom Of A Sodapop.wav'),
    },
    {
      name: 'Clap 1',
      character: '3',
      file: require('../assets/audio/Claps/Claves.wav'),
    },
    {
      name: 'Hat 1',
      character: '4',
      file: require('../assets/audio/Hat/Ice Hat.wav'),
    },


    
    {
      name: 'Kick 2',
      character: 'Q',
      file: require('../assets/audio/Kicks/Low Kick.wav'),
    },
    {
      name: 'Snare 2',
      character: 'W',
      file: require('../assets/audio/Snares/Filler Snare 1.wav'),
    },
    {
      name: 'Clap 2',
      character: 'E',
      file: require('../assets/audio/Claps/Fye Clap.wav'),
    },
    {
      name: 'Hat 2',
      character: 'R',
      file: require('../assets/audio/Hat/Keychain Hat.wav'),
    },


    
    {
      name: 'Kick 3',
      character: 'A',
      file: require('../assets/audio/Kicks/Pumped Up Kick.wav'),
    },
    {
      name: 'Snare 3',
      character: 'S',
      file: require('../assets/audio/Snares/Filler Snare 2.wav'),
    },
    {
      name: 'Clap 3',
      character: 'D',
      file: require('../assets/audio/Claps/Shaker 1.wav'),
    },
    {
      name: 'Hat 3',
      character: 'F',
      file: require('../assets/audio/Hat/Punchy Hat.wav'),
    },


    {
      name: 'Kick 4',
      character: 'Z',
      file: require('../assets/audio/Kicks/Short 808.wav'),
    },
    {
      name: 'Snare 4',
      character: 'X',
      file: require('../assets/audio/Snares/Old Trap Snare.wav'),
    },
    {
      name: 'Clap 4',
      character: 'C',
      file: require('../assets/audio/Claps/Woah Perc.wav'),
    },
    {
      name: 'Hat 4',
      character: 'V',
      file: require('../assets/audio/Hat/Trap O\' Hat.wav'),
    },
    
    
  ]

  const generateButtons = () => {
    return drumSounds.map((sound, i) => {
      return (
        <div key={i}>
          <audio
            preload="auto"
            ref={el => audioElements.current[i] = el} 
            controls style={{ display: 'none' }}>
            <source src={sound.file} type="audio/wav" /> 
          </audio>
          <button
            ref={el => buttonElements.current[i] = el}
            onClick={(e) => {
              e.preventDefault()
              audioElements.current[i].currentTime = 0;
              audioElements.current[i].play()
            }}>
            <span className="name">{sound.name}</span>
            <span className="key">KEY {sound.character}</span>
          </button>
          
        </div>
      )
    })
  }

  return (
    <div className="drum-pad">

      <div className="instructions">
        <h1>DRUMPAD<span>2020</span></h1>
        <p>Press the key to play a sound</p>
      </div>

      <div className="buttons">
        {generateButtons()}
      </div>

    </div>
  )
}

export default DrumPad;