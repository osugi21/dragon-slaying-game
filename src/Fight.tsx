import React, { useState } from "react";
import { GiSpikedDragonHead } from "react-icons/gi";
import { GiBroadsword } from "react-icons/gi";

function Fight() {
  const [dragonRecoverPoint, setDragonRecoverPoint] = useState<number>(0);
  const [numberOfAttack, setNumberOfAttack] = useState<number>(0);
  const [dragonHitPoint, setDragonHitPoint] = useState<number>(100);
  const [attackPoint, setAttackPoint] = useState<number>(1);

  console.log("攻撃力" + attackPoint);
  console.log("回復力" + dragonRecoverPoint);

  const fightAction = () => {
    let currentHP = dragonHitPoint;
    let attacks = 0;

    if (attackPoint > dragonRecoverPoint && attackPoint < 100) {
      while (currentHP > 0) {
        currentHP -= attackPoint;
        currentHP += dragonRecoverPoint;
        attacks++;
      }
    } else if (attackPoint >= 100) {
      currentHP -= attackPoint;
      attacks++;
    } else {
      return;
    }
    setDragonHitPoint(currentHP);
    setNumberOfAttack(attacks);
  };

  const Retry = () => {
    setDragonHitPoint(100);
    setNumberOfAttack(0);
  };
  return (
    <div>
      <div>
        <GiSpikedDragonHead size="100px" />
        <p>HP:{dragonHitPoint}</p>
        <p>Recover</p>
        <input
          type="number"
          min="0"
          max="100"
          value={dragonRecoverPoint}
          onChange={(e) => setDragonRecoverPoint(Number(e.target.value))}
        />
      </div>
      <div>
        <GiBroadsword size="100px" />
        <p>Attack</p>
        <input
          type="number"
          min="0"
          max="100"
          value={attackPoint}
          onChange={(e) => setAttackPoint(Number(e.target.value))}
        />
      </div>
      <button onClick={fightAction}>Fight</button>
      <p>
        {attackPoint > dragonRecoverPoint
          ? "Number of Attacks:" + numberOfAttack
          : "Subjugation failure"}
      </p>
      <button onClick={Retry}>Retry</button>
    </div>
  );
}

export default Fight;
