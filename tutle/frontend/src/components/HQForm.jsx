import React from 'react';

function HQForm () {
  const [guard, setGuard] = React.useState(false);
  const [alka, setAlka] = React.useState(false);
  const [abso, setAbso] = React.useState(false);
  const [cata, setCata] = React.useState(false);
  return (
    <div class="hqpage">
        <form class='hqform'>
          <div><label htmlFor='guard'>Guardian</label><input type='checkbox' id='guard' name='guard' value='guard' onChange={() => setGuard(!guard)}></input></div>
          <div><label htmlFor='alka'>Alkatraz</label><input type='checkbox' id='alka' name='alka' value='alka' onChange={() => setAlka(!alka)}></input></div>
          <div><label htmlFor='abso'>Absolution</label><input type='checkbox' id='abso' name='abso' value='abso' onChange={() => setAbso(!abso)}></input></div>
          <div><label htmlFor='cata'>Cataclysm</label><input type='checkbox' id='cata' name='cata' value='cata' onChange={() => setCata(!cata)}></input></div>
        </form>
      <div class='grid'>
      {guard && 
        <div class='box'>
          <h2>Guardian</h2>
          <div class='mythicbox'><img src="https://www.wynndata.tk/assets/images/items/v4//spear/spear--fire3.png" class='mythic'></img></div>
          <ul><p>Food</p>
            <ul>
              <li>
                HP - Red murcury x 6
              </li>
            </ul>
          </ul>
          <ul><p>Potions</p>
            <ul>
              <li>
                HP - <a href='https://wynnbuilder.github.io/crafter/#19I9I9I9u8k9Y9U51' target="_blank">Farcor Pot (Optimal)</a>
              </li>
              <li>
                HP - <a href="https://wynnbuilder.github.io/crafter/#19I9I9I956u9Y9U81" target="_blank">Farcor Pot (Cheap)</a>
              </li>
              <li>
                HP - Elephant Toenail x 6 (cheap)
              </li>
              <li>  
                Defence/Agility - Rock-hard Beak x 6
              </li>
            </ul>
          </ul>
        </div>
      }
      {alka &&
        <div class='box'>
          <h2>Alkatraz</h2>
          <div class='mythicbox'><img src="https://www.wynndata.tk/assets/images/items/v4//spear/spear--earth1.png" class='mythic'></img></div>
          <ul><p>Food</p>
            <ul>
              <li>
                Jump Height - <a href='https://hppeng-wynn.github.io/crafter/#16L6L6L6L95959f11' target='_blank'>Jump Height Food</a>
              </li>
              <li>
                Strength/Melee % - Mangrove Root x 6
              </li>
              <li>
                Earth Damage % - Succulent Crab Food x 6 (Optimal)
              </li>
              <li>
                Rainbow Food - Letvus delight x 6 (Cheap/Optional)
              </li>
            </ul>
          </ul>
          <ul><p>Potions</p>
            <ul>
              <li>
                Dexterity/Melee Raw - Larvae Cluster x 6
              </li>
              <li>
                Spell %/Melee % - <a href='https://wynnbuilder.github.io/crafter/#18q8z8q8z8q8z9j11'  target='_blank'>Bat Heart Pot (Optimal)</a>
              </li>
              <li>
                Spell %/Melee % - Serpent Tongue x 6 (cheap)
              </li>
              <li>
                Thunder %/Earth % - Bottled Decay x 6
              </li>
            </ul>
          </ul>
        </div>
      }
      {abso &&
        <div class='box'>
          <h2>Absolution</h2>
          <div class='mythicbox'><img src="https://www.wynndata.tk/assets/images/items/v4//relik/relik--fire3.png" class='mythic'></img></div>
          <ul><p>Food</p>
            <ul>
              <li>
                HP - Red murcury x 6
              </li>
            </ul>
          </ul>
          <ul><p>Potions</p>
            <ul>
              <li>
                HP - <a href='https://wynnbuilder.github.io/crafter/#19I9I9I9u8k9Y9U51' target="_blank">Farcor Pot (Optimal)</a>
              </li>
              <li>
                HP - <a href="https://wynnbuilder.github.io/crafter/#19I9I9I956u9Y9U81" target="_blank">Farcor Pot (Cheap)</a>
              </li>
              <li>
                HP - Elephant Toenail x 6 (cheap)
              </li>
              <li>  
                Mana/Spell - Glacial Anomaly x 6
              </li>
              <li>
                Water Damage % - <a href="https://hppeng-wynn.github.io/crafter/#16n6n6n6n6n959j21" target="_blank">Flow of Fate (Optimal)</a>
              </li>
              <li>
                Water Damage % - <a href="https://hppeng-wynn.github.io/crafter/#18l8l8l8l8l959j41" target='_blank'>Aqua Vitae (cheap)</a>
              </li>
              <li>  
                Defence/Agility - Rock-hard Beak x 6
              </li>
            </ul>
          </ul>
        </div>
      }
      {cata &&
        <div class='box'>
          <h2>Cataclysm</h2>
          <div class='mythicbox'><img src="https://www.wynndata.tk/assets/images/items/v4//dagger/dagger--thunder3.png" class='mythic'></img></div>
          <ul><p>Food</p>
            <ul>
              <li>
                -Attack Speed - <a href='https://hppeng-wynn.github.io/crafter/#19V9V9V9V95959f11' target='_blank'>Kerasot Sporehead</a>
              </li>
              <li>
                Spell % Food - Throbbing Avos Heart x 6
              </li>
              <li>
                Rainbow Food - Letvus delight x 6 (Cheap/Optional)
              </li>
            </ul>
          </ul>
          <ul><p>Potions</p>
            <ul>
              <li>
                Strength - Creepvine Cluster x 6
              </li>
              <li>  
                Mana/Spell - Glacial Anomaly x 6
              </li>
              <li>
                Spell %/Melee % - <a href='https://wynnbuilder.github.io/crafter/#18q8z8q8z8q8z9j11'  target='_blank'>Bat Heart Pot (Optimal)</a>
              </li>
              <li>
                Spell %/Melee % - Serpent Tongue x 6 (cheap)
              </li>
              <li>
                Thunder %/Earth % - Bottled Decay x 6
              </li>
            </ul>
          </ul>
          <ul><p>Scrolls</p>
            <ul>
              <li>
                Spell % - <a href='https://hppeng-wynn.github.io/crafter/#18Q8Q8Q8Q8Q959o11' target='_blank'>Squid Brain Scroll</a>
              </li>
            </ul>
          </ul>
        </div>
      }
      {(guard || alka || abso || cata) &&
        <div class='box'>
          <h2>Combined Scrolls</h2>
          <ul>
          {(cata || alka) &&
            <>
              <li>
                Strength - Earthly Aura x 6
              </li>
              <li>
                Dexterity - Energetic Aura x 6
              </li>
              <li>
                Spell Raw/Melee Raw - <a href='https://hppeng-wynn.github.io/crafter/#16R6R6R6R6R959o21'  target='blank'>Dragon Aura Pot</a>
              </li>
            </>
          }
          {(cata || abso) &&
            <>
              <li>
                Intelligence - Watery Aura x 6
              </li>
            </>
          }
          {(cata || abso || alka) &&
            <>
              <li>
                Rainbow % - <a href='https://hppeng-wynn.github.io/crafter/#19r9r9r95959Y9o61'  target='blank'>Plane of Non-Existence Scroll (Optimal)</a>
              </li>
              <li>
                Rainbow % - <a href='https://hppeng-wynn.github.io/crafter/#1959r9r9B959r9o51'  target='blank'>Dominant Force Scroll (Alternative)</a>
              </li>
              <li>
                Rainbow % - <a href='https://hppeng-wynn.github.io/crafter/#19r9r9r959r719o51'  target='blank'>Infected Mass Scroll (cheap)</a>
              </li>
            </>
          }
          {(guard || abso) &&
            <>
              <li>
                Defence - Fiery Aura x 6
              </li>
              <li>
                Agility - Windy Aura x 6
              </li>
              <li>
                HP/HP regeneration - Flameheart x 6
              </li>
            </>
          }
          </ul>
        </div>
      }
      </div>
    </div>
  )
}

export default HQForm