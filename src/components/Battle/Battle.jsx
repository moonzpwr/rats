import s from './Battle.module.css'
import { useState, useEffect } from 'react'
import heroImg from '../../images/hero.png'
import enemyImg from '../../images/enemy.png'

export default function Battle() {

    const [hero, setHero] = useState({
        fullLife: 253,
        life: 253,
        attackPower: 40,
        attackTarget: null,
        blockTarget: null,
    })

    const [enemy, setEnemy] = useState({
        fullLife: 253,
        life: 253,
        attackPower: 40,
        attackTarget: null,
        blockTarget: null,
    })

    const [isOpen, setIsOpen] = useState(false)

    const now = new Date()
    const parsedNow = `${now.getHours()}:${now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()}:${now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds()}`;

    const [combatLog, setCombatLog] = useState([])

    useEffect(() => {
        if (enemy.life <= 0 && hero.life <= 0) {
            alert('draw')
        } else if (enemy.life <= 0) {
            alert('you win')
        } else if (hero.life <= 0) {
            alert('you lose')
        }
    }, [hero.life, enemy.life])

    const battle = () => {
        if (!hero.attackTarget || !hero.blockTarget) {
            alert('choose what to attack and block')
            return
        }

        setEnemy(prevState => ({
            ...prevState,
            attackTarget: Number((Math.random(1) * (3 - 1) + 1).toFixed(0)),
            blockTarget:  Number((Math.random(1) * (3 - 1) + 1).toFixed(0)),
        }))

        if (hero.attackTarget !== enemy.blockTarget) {
            setEnemy(prevState => ({
                ...prevState,
                life: enemy.life - hero.attackPower,
            }))
            setCombatLog(prevState => ([...prevState, {text:`you hit enemy for ${hero.attackPower}, enemy have ${enemy.life - hero.attackPower}HP`, time: parsedNow}]))
        } else {
            setCombatLog(prevState => ([...prevState, {text:`enemy block! and have ${enemy.life}HP`, time: parsedNow}]))
        }

        if (enemy.attackTarget !== hero.blockTarget) {
            setHero(prevState => ({
                ...prevState,
                life: hero.life - enemy.attackPower
            }))
            setCombatLog(prevState => ([...prevState, {text: `enemy hit you for ${enemy.attackPower}, you have ${hero.life - enemy.attackPower}HP`, time: parsedNow}]))
        } else {
            setCombatLog(prevState => ([...prevState, {text:`you block! and have ${hero.life}HP`, time: parsedNow}]))
        }
    }

  return (
    <div className={s.root}>
        <div className={s.combatContainer}>
            <div className={s.character}>
                <span className={s.lifebar}>
                    <span className={s.life} style={{ width: `${hero.life / hero.fullLife * 100}%` }}>
                        {hero.life}/{hero.fullLife}
                    </span>
                </span>
                  <img src={heroImg}/>
            </div>
            <div className={s.battleContainer}>
                <div className={s.attackContainer}>
                    <h2 className={s.battleTitle}>Attack👊</h2>
                    <ul className={s.battleList}>
                        <li><label><input type='radio' name="attack" value='1' onClick={(e)=>{setHero(prevState => ({...prevState, attackTarget: Number(e.target.value)}))}}/>HEAD</label></li>
                        <li><label><input type='radio' name="attack" value='2' onClick={(e)=>{setHero(prevState => ({...prevState, attackTarget: Number(e.target.value)}))}}/>CHEST</label></li>
                        <li><label><input type='radio' name="attack" value='3' onClick={(e)=>{setHero(prevState => ({...prevState, attackTarget: Number(e.target.value)}))}}/>LEGS</label></li>
                    </ul>
                </div>
                <div className={s.blockContainer}>
                    <h2 className={s.battleTitle}>Block🛡️</h2>
                    <ul className={s.battleList}>
                        <li><label><input type='radio' name="block" value='1' onClick={(e)=>{setHero(prevState => ({...prevState, blockTarget: Number(e.target.value)}))}}/>HEAD</label></li>
                        <li><label><input type='radio' name="block" value='2' onClick={(e)=>{setHero(prevState => ({...prevState, blockTarget: Number(e.target.value)}))}}/>CHEST</label></li>
                        <li><label><input type='radio' name="block" value='3' onClick={(e)=>{setHero(prevState => ({...prevState, blockTarget: Number(e.target.value)}))}}/>LEGS</label></li>
                    </ul>
                </div>
                <button className={s.battleBtn} onClick={()=>battle()}>⚔️Battle!⚔️</button>
            </div>
            <div  className={s.enemy}>
                <span className={s.lifebar}>
                    <span className={s.life} style={{ width: `${enemy.life / enemy.fullLife * 100}%` }}>
                        {enemy.life}/{enemy.fullLife}
                    </span>
                </span>
                <img src={enemyImg}/>
            </div>
        </div>
        <div className={s.combatLogs}>
              {combatLog.map(({time, text}, i) => (
                  <p key={i}>
                      <span className={s.time}>{time}</span>
                      &nbsp;{text}
                  </p>
              )).reverse()}
        </div>
        <div className={s.mainContainer}>
        <div className={`${s.container} ${isOpen ? s.isOpen : null}`}>
            <div className={s.sidemenu} onClick={() => { setIsOpen(!isOpen)}}>side menu</div>
            <div className={s.content}>content</div>
        </div>
        </div>
    </div>
  );
}