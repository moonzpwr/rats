const hero = {
    id: 1,
    name: 'mnzpwr',
    level: 11,
    exp: 3567,
    nextLevelExp: 5000,
    stats: {
        strength: 56,
        agility: 80,
        intelligence: 25,
        endurance: 40,
        luck: 76,
    },
    params: {
        HP: 1000,
        critСhance: 0.15,
        dodgeChance: 0.3,
        defence: 250,
        blockChance: 0,
    },
    inventory: [
        {
            id: 123,
            title: 'medkit',
            price: 200,
            description: 'heal 140 HP'
        },
        {
            id: 321,
            title: 'Town scroll portal',
            price: 50,
            description: 'teleportation to the town'
        },
    ],
    equipment: { //TODO
        head: {
            id: 56,
            title: 'hemlet of blind',
            defence: 13,
            price: 250,
            bonusStats: {
                agility: 2,
                luck: 2
            },
            requireStats: {
                endurance: 20,
                strength: 20
            }
        },
        body: {
            id: 57,
            title: 'berserkers hauberk',
            defence: 25,
            price: 350,
            bonusStats: {
                agility: 2,
                luck: 2
            },
            requireStats: {
                endurance: 20,
                luck: 20
            }
        },
        hand: {
            id: 58,
            title: 'glves of wisdom',
            defence: 13,
            price: 200,
            bonusStats: {
                agility: 2,
                luck: 2
            },
            requireStats: {
                agility: 20,
                strength: 20
            },
        },
        legs: {
            id: 59,
            title: 'pant of fearless warior',
            defence: 13,
            price: 200,
            bonusStats: {
                agility: 2,
                luck: 2
            },
            requireStats: {
                agility: 20,
                strength: 20
            },
        },
        boots: {
            id: 60,
            title: 'bonecrushers',
            defence: 13,
            price: 200,
            bonusStats: {
                agility: 2,
                luck: 2
            },
            requireStats: {
                agility: 20,
                strength: 20
            },
        },
        leftHand: {
            id: 789,
            title: 'dagger of eternity',
            damage: 35,
            price: 400,
        },
        rightHand: {
            id: 789,
            title: 'axe of eternity',
            damage: 35,
            price: 400,
        },
        jewelry: 'to be done',
    }
}

const enemy = {
    id: 2,
    name: 'rat',
    level: 1,
    expEarn: 25,
    stats: {
        strength: 10,
        agility: 10,
        intelligence: 10,
        endurance: 10,
        luck: 10,
    },
    params: {
        HP: 50,
        critСhance: 0.05,
        dodgeChance: 0.13,
        defence: 20,
        blockChance: 0.1,
    },
}