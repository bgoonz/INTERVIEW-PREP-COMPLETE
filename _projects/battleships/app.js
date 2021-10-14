document.addEventListener('DOMContentLoaded', () => {
    const userGrid = document.querySelector('.grid-user')
    const computerGrid = document.querySelector('.grid-computer')
    const displayGrid = document.querySelector('.grid-display')
    const ships = document.querySelectorAll('.ship')
    const destroyer = document.querySelector('.destroyer-container')
    const submarine = document.querySelector('.submarine-container')
    const cruiser = document.querySelector('.cruiser-container')
    const battleship = document.querySelector('.battleship-container')
    const carrier = document.querySelector('.carrier-container')
    const startButton = document.querySelector('#start')
    const rotateButton = document.querySelector('#rotate')
    const turnDisplay = document.querySelector('#whose-go')
    const infoDisplay = document.querySelector('#info')
    const userSquares = []
    const computerSquares = []
    const width = 10
    let isGameOver = false
    let currentPlayer = 'user'
    let isHorizontal = true

   // Create Boards
  function createBoard(grid, squares, width) {
    for (let i = 0; i < width*width; i++) {
      const square = document.createElement('div')
      square.setAttribute('id', i)
      grid.appendChild(square)
        squares.push(square)
    }
  }
  createBoard(userGrid, userSquares, width)
  createBoard(computerGrid, computerSquares, width)

  // Ships
  const shipArray = [
    {
      name: 'destroyer',
      directions: [
        [0, 1],
        [0, width]
      ]
    },
    {
      name: 'submarine',
      directions: [
        [0, 1, 2],
        [0, width, width*2]
      ]
    },
    {
      name: 'cruiser',
      directions: [
        [0, 1, 2],
        [0, width, width*2]
      ]
    },
    {
      name: 'battleship',
      directions: [
        [0, 1, 2, 3],
        [0, width, width*2, width*3]
      ]
    },
    {
      name: 'carrier',
      directions: [
        [0, 1, 2, 3, 4],
        [0, width, width*2, width*3, width*4]
      ]
    }
  ]


  // Draw the computers ships in random locations
  function generate(ship) {
    let randomDirection = Math.floor(Math.random() * ship.directions.length)
    let current = ship.directions[randomDirection]
    if (randomDirection === 0 ) direction = 1
    if (randomDirection === 1) direction = 10
    let randomStart = Math.abs(Math.floor(Math.random() * computerSquares.length - (ship.directions[0].length * direction)))

    const isTaken = current.some(index => computerSquares[randomStart + index].classList.contains('taken'))
    const isAtRightEdge = current.some(index => (randomStart + index) % width === width - 1)
    const isAtLeftEdge = current.some(index => (randomStart + index) % width === 0)

    if (!isTaken && !isAtRightEdge && !isAtLeftEdge) current.forEach(index => computerSquares[randomStart + index].classList.add('taken', ship.name))

    else generate(ship)
  }
  generate(shipArray[0])
  generate(shipArray[1])
  generate(shipArray[2])
  generate(shipArray[3])
  generate(shipArray[4])

  //Rotate the Ships
  function rotate() {
    if (isHorizontal) {
      destroyer.classList.toggle('destroyer-container-vertical')
      submarine.classList.toggle('submarine-container-vertical')
      cruiser.classList.toggle('cruiser-container-vertical')
      battleship.classList.toggle('battleship-container-vertical')
      carrier.classList.toggle('carrier-container-vertical')
      isHorizontal = false
      return
    }
    if (!isHorizontal) {
      destroyer.classList.toggle('destroyer-container-vertical')
      submarine.classList.toggle('submarine-container-vertical')
      cruiser.classList.toggle('cruiser-container-vertical')
      battleship.classList.toggle('battleship-container-vertical')
      carrier.classList.toggle('carrier-container-vertical')
      isHorizontal = true
      return
    }
  }
  rotateButton.addEventListener('click', rotate)

  // Move around user ship options
  ships.forEach(ship => ship.addEventListener('dragstart', dragStart))
  userSquares.forEach(square => square.addEventListener('dragstart', dragStart))
  userSquares.forEach(square => square.addEventListener('dragover', dragOver))
  userSquares.forEach(square => square.addEventListener('dragenter', dragEnter))
  userSquares.forEach(square => square.addEventListener('drageleave', dragLeave))
  userSquares.forEach(square => square.addEventListener('drop', dragDrop))
  userSquares.forEach(square => square.addEventListener('dragend', dragEnd))

  let selectedShipIndex
  let draggedShip
  let draggedShipLength

  ships.forEach(ship => ship.addEventListener('mousedown', (e) => {
    selectedShipIndex = e.target.id
  }))
 
  function dragStart(e){
    draggedShipNode = this.childNodes.item(e.target)
    draggedShip = this
    draggedShipLength = this.childNodes.length
  }

  function dragOver(e) {
    e.preventDefault()
  }

  function dragEnter(e) {
    e.preventDefault()
  }

  function dragLeave() {
    console.log('dragLeave',this)
  }

  function dragDrop() {
    shipId = draggedShip.firstChild.id
    shipClass = shipId.slice(0, -2)

    if (selectedShipIndex === draggedShip.firstChild.id) {
      for (let i = 0; i < draggedShipLength; i++) {
        if (isHorizontal) {
          userSquares[parseInt(this.id) + i].classList.add('taken', shipClass)
        } else userSquares[parseInt(this.id) + width*i].classList.add('taken', shipClass)
      }
    }
    if (draggedShip.childNodes[1] && selectedShipIndex === draggedShip.childNodes[1].id) {
      for (let i = 0; i < draggedShipLength; i++) {
        if (isHorizontal) {
          userSquares[parseInt(this.id) -1 + i].classList.add('taken', shipClass)
        } else userSquares[parseInt(this.id) -1 + width*i].classList.add('taken', shipClass)
      }
    }
    if (draggedShip.childNodes[2] && selectedShipIndex === draggedShip.childNodes[2].id) {
      for (let i = 0; i < draggedShipLength; i++) {
        if (isHorizontal) {
          userSquares[parseInt(this.id) -2 + i].classList.add('taken', shipClass)
        } else userSquares[parseInt(this.id) -2 + width*i].classList.add('taken', shipClass)
      }
    }
    if (draggedShip.childNodes[3] && selectedShipIndex === draggedShip.childNodes[3].id) {
      for (let i = 0; i < draggedShipLength; i++) {
        if (isHorizontal) {
          userSquares[parseInt(this.id) -3 + i].classList.add('taken', shipClass)
        } else userSquares[parseInt(this.id) -3 + width*i].classList.add('taken', shipClass)      
      }
    }
    if (draggedShip.childNodes[4] && selectedShipIndex === draggedShip.childNodes[4].id) {
      for (let i = 0; i < draggedShipLength; i++) {
        if (isHorizontal) {
          userSquares[parseInt(this.id) -4 + i].classList.add('taken', shipClass)
        } else userSquares[parseInt(this.id) -4 + width*i].classList.add('taken', shipClass) 
      }
    }
    displayGrid.removeChild(draggedShip)
  }

  function dragEnd() {
    console.log('dragEnd',this )
  }


  // Game logic
  function playGame() {
    if (isGameOver) return
    if (currentPlayer === 'user') {
      turnDisplay.innerHTML = 'Your Go'
      computerSquares.forEach(square => square.addEventListener('click', function(e) {
        revealSquare(square)
      }))
    }
    if (currentPlayer === 'computer') {
      turnDisplay.innerHTML = 'Computers Go'
      setTimeout (computerGo, 1000)
    }
  }
  startButton.addEventListener('click', playGame)

  // Notify user of users wins
  let destroyerCount = 0
  let submarineCount = 0
  let cruiserCount = 0
  let battleshipCount = 0
  let carrierCount = 0

  function revealSquare(square) {
    if (!square.classList.contains('boom')) {
      if (!square.classList.contains('boom') && square.classList.contains('destroyer')) destroyerCount++
      if (!square.classList.contains('boom') && square.classList.contains('submarine')) submarineCount++
      if (!square.classList.contains('boom') && square.classList.contains('cruiser')) cruiserCount++
      if (!square.classList.contains('boom') && square.classList.contains('battleship')) battleshipCount++
      if (!square.classList.contains('boom') && square.classList.contains('carrier')) carrierCount++
  
      if (square.classList.contains('taken')) {
        square.classList.add('boom')
      }
      checkForWins()
      currentPlayer = 'computer'
      playGame()
    }
    
  }

  // Notify user of computers wins
  let cpuDestroyerCount = 0
  let cpuSubmarineCount = 0
  let cpuCruiserCount = 0
  let cpuBattleshipCount = 0
  let cpuCarrierCount = 0

  function computerGo() {
    let random = Math.floor(Math.random() * userSquares.length)
    if (!userSquares[random].classList.contains('boom')) {
      userSquares[random].classList.add('boom')
      if (userSquares[random].classList.contains('destroyer')) cpuDestroyerCount++
      if (userSquares[random].classList.contains('submarine')) cpuSubmarineCount++
      if (userSquares[random].classList.contains('cruiser')) cpuCruiserCount++
      if (userSquares[random].classList.contains('battleship')) cpuBattleshipCount++
      if (userSquares[random].classList.contains('carrier')) cpuCarrierCount++
      checkForWins() 
    } else computerGo()
    currentPlayer = 'user'
    turnDisplay.innerHTML = 'Your Go'
  }


  // Check for wins
  function checkForWins() {
    if (destroyerCount === 2) {
      infoDisplay.innerHTML = 'You sunk the computers destroyer'
      destroyerCount = 10
    }
    if (submarineCount === 3) {
      infoDisplay.innerHTML = 'You sunk the computers submarine'
      submarineCount = 10
    }
    if (cruiserCount === 3) {
      infoDisplay.innerHTML = 'You sunk the computers cruiser'
      cruiserCount = 10
    }
    if (battleshipCount === 4) {
      infoDisplay.innerHTML = 'You sunk the computers battleship'
      battleshipCount = 10
    }
    if (carrierCount === 5) {
      infoDisplay.innerHTML = 'You sunk the computers carrier'
      carrierCount = 10
    }
    if (cpuDestroyerCount === 2) {
      infoDisplay.innerHTML = 'Computer sunk the your destroyer'
      cpuDestroyerCount = 10
    }
    if (cpuSubmarineCount === 3) {
      infoDisplay.innerHTML = 'Computer sunk the your submarine'
      cpuSubmarineCount = 10
    }
    if (cpuCruiserCount === 3) {
      infoDisplay.innerHTML = 'Computer sunk the your cruiser'
       cpuCruiserCount = 10
    }
    if (cpuBattleshipCount === 4) {
      infoDisplay.innerHTML = 'Computer sunk the your battleship'
      cpuBattleshipCount = 10
    }
    if (cpuCarrierCount === 5) {
      infoDisplay.innerHTML = 'Computer sunk the your carrier'
      cpuCarrierCount = 10
    }
    if ((destroyerCount + submarineCount + cruiserCount + battleshipCount + carrierCount) === 50) {
      infoDisplay.innerHTML = 'YOU WIN!'
      isGameOver = true
    }
    if ((cpuDestroyerCount + cpuSubmarineCount + cpuCruiserCount + cpuBattleshipCount + cpuCarrierCount) === 50) {
      infoDisplay.innerHTML = 'COMPUTER WINS!'
      isGameOver = true
    }
  }

})
