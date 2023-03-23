var places = [];
var speed = 300;
var playerTurnIndex = 1;

function CreateBox(index, name, level, value, owner, currentValue) {
  this.index = index;
  this.name = name; // property name
  this.level = level; // property level (0 = not property)
  this.value = value; // (property value)
  this.owner = owner; // (property owner)
  this.currentValue = value;
  if (this.level != 0) {
    //add property name to html
    this.node = document.querySelector(".div" + index);
    this.node.firstElementChild.append(name);
  }
  places.push(this);
}

var players = [];
function CreatePlayer(
  name,
  index,
  money,
  state,
  stop,
  position,
  color,
  propValue,
  ownedProp
) {
  this.name = name; //名字
  this.index = index; //index
  this.money = money; //目前持有金錢
  this.state = state; // active / jail / bankrupt
  this.stop = stop; //隔離天數
  this.position = position; //當前位置
  this.color = color;
  this.propValue = propValue;
  this.ownedProp = ownedProp;
  players.push(this);
}

function startGame() {
  var player1Name = document.getElementById("typePlayer1Name").value;
  var player2Name = document.getElementById("typePlayer2Name").value;
  var player3Name = document.getElementById("typePlayer3Name").value;
  var player4Name = document.getElementById("typePlayer4Name").value;
  //default name
  if (player1Name == "") {
    player1Name = "Nana";
  }
  if (player2Name == "") {
    player2Name = "亞視一姐";
  }
  if (player3Name == "") {
    player3Name = "Happy 8";
  }
  if (player4Name == "") {
    player4Name = "港大美女";
  }

  new CreatePlayer(player1Name, 1, 15000, "active", 0, 0, "#EF847C", 0, []);
  new CreatePlayer(player2Name, 2, 15000, "active", 0, 0, "#DDD05B", 0, []);
  new CreatePlayer(player3Name, 3, 15000, "active", 0, 0, "#97BC9A", 0, []);
  new CreatePlayer(player4Name, 4, 15000, "active", 0, 0, "#75C3D8", 0, []);
  document.querySelector(`#player1Money`).innerText = `$${players[0].money}`;
  document.querySelector(`#player2Money`).innerText = `$${players[1].money}`;
  document.querySelector(`#player3Money`).innerText = `$${players[2].money}`;
  document.querySelector(`#player4Money`).innerText = `$${players[3].money}`;
  document.querySelector("#player1Name").innerText = player1Name;
  document.querySelector("#player2Name").innerText = player2Name;
  document.querySelector("#player3Name").innerText = player3Name;
  document.querySelector("#player4Name").innerText = player4Name;
  document.querySelector(".startPage").classList.add("hide");
  document.getElementById("playernow").innerText = players[0].name;
  //Add Current Player Border (Right Bottom)
  document
    .getElementById("player" + playerTurnIndex + "Info")
    .classList.add("currentPlayerBorder");
  for (i = 1; i <= players.length; i++) {
    const node = document.createElement("div");
    node.setAttribute("id", `player${i}Chess`);
    const img = document.createElement("img");
    img.src = `img/player${i}.png`;
    node.classList.add("playerIcon", "chess");
    node.appendChild(img);
    document.querySelector(".div0").appendChild(node);
  }
  // Player 1 Chess on Top
  document.getElementById(`player1Chess`).classList.add("currentPlayerZIndex");
  addPropInfo();
}

//Updated by Aqua 02.28 7:00pm
new CreateBox(0, "起點", 0, 2000, null);
new CreateBox(1, "將軍澳", 1, 2000, null);
new CreateBox(2, "機會", 0, 0, null);
new CreateBox(3, "愉景灣", 1, 4000, null);
new CreateBox(4, "東涌", 1, 2500, null);
new CreateBox(5, "銅鑼灣", 1, 2500, null);
new CreateBox(6, "黃大仙", 1, 1500, null);
new CreateBox(7, "電費", 0, 600, null);
new CreateBox(8, "觀塘", 1, 1500, null);
new CreateBox(9, "葵涌", 1, 1500, null);
new CreateBox(10, "免費泊車", 0, 0, null);
new CreateBox(11, "黃埔", 1, 2500, null);
new CreateBox(12, "入息税", 0, 800, null);
new CreateBox(13, "藍田", 1, 1500, null);
new CreateBox(14, "啟德", 1, 2500, null);
new CreateBox(15, "粉嶺", 1, 1500, null);
new CreateBox(16, "馬灣", 1, 4000, null);
new CreateBox(17, "機會", 0, 0, null);
new CreateBox(18, "長洲", 1, 2000, null);
new CreateBox(19, "馬鞍山", 1, 2500, null);
new CreateBox(20, "命運之輪", 0, 0, null);
new CreateBox(21, "薄扶林", 1, 3000, null);
new CreateBox(22, "中環", 1, 3000, null);
new CreateBox(23, "淺水灣", 1, 3200, null);
new CreateBox(24, "尖沙咀", 1, 3500, null);
new CreateBox(25, "機會", 0, 0, null);
new CreateBox(26, "大嶼山", 1, 3000, null);
new CreateBox(27, "印花稅", 0, 600, null);
new CreateBox(28, "深井", 1, 2500, null);
new CreateBox(29, "天水圍", 1, 2000, null);
new CreateBox(30, "入住糟糕灣", 0, 0, null);
new CreateBox(31, "西營盤", 1, 3900, null);
new CreateBox(32, "奢侈稅", 0, 500, null);
new CreateBox(33, "北角", 1, 4000, null);
new CreateBox(34, "太古", 1, 4200, null);
new CreateBox(35, "利東", 1, 4200, null);
new CreateBox(36, "康城", 1, 4500, null);
new CreateBox(37, "機會", 0, 0, null);
new CreateBox(38, "欣澳", 1, 5000, null);
new CreateBox(39, "奧運", 1, 6000, null);

var fates = [];
function CreateFate(text, value) {
  this.text = text;
  this.value = value;
  fates.push(this);
}

new CreateFate("獲得消費券$2000。", 2000);
new CreateFate("網上情緣受騙$1000。", -1000);
new CreateFate("Nana結婚, 比人情$1000。", -1000);
new CreateFate("參加全城造星，交報名費$500。", -500);
new CreateFate("中六合彩$1000。", 1000);
new CreateFate("無帶口罩出街，罰款$2000。", -2000);
new CreateFate("突然受到群眾追捧，接廣告賺取$1000報酬。", 1000);
new CreateFate("打疫苗抽獎，中獎$500。", 500);
new CreateFate(
  "疫情下，防疫物資短缺，但人間有情，有人資助你$1000物資費。",
  1000
);
new CreateFate("獲公司邀請出席外國活動，賺取$3000報酬。", 3000);
new CreateFate("接獲美容公司代言人一職，賺取$2000報酬。", 2000);
new CreateFate("近來人氣急升，受邀做電影配角，賺取$5000片酬。", 5000);
new CreateFate("由於公園演出表現凸出，獲紅包$2000。", 2000);
new CreateFate("社交平台粉絲數量達數萬人，接獲公司贊助$1000。", 1000);
new CreateFate("今個月減肥成功，獲得公司獎金$1000。", 1000);
new CreateFate("違反限聚令，罰款$1000。", -1000);
new CreateFate("口不擇言，導致損失$1500代言報酬。", -1500);
new CreateFate("恆指暴跌，投資失利，損失$2000。", -2000);
new CreateFate("去外國旅行，遇上賊人，損失$3000。", -3000);
new CreateFate("不小心遺失贊助公司衣服，賠償$2000。", -2000);
new CreateFate("每年身體檢查發現異常，需要花費$1000額外檢查。", -1000);
new CreateFate("墮入求職陷阱，損失$3000。", -3000);

//Roll two dices area
function rollDice() {
  // Generate a random number between 1 and 6 for each die
  const die1 = Math.floor(Math.random() * 6) + 1;
  const die2 = Math.floor(Math.random() * 6) + 1;

  // Calculate the total value of both dice
  const total = die1 + die2;
  let i = 1;

  // PlayerMove
  document.getElementById("rolldice").disabled = true;
  playerMove(playerTurnIndex);

  function playerMove(index) {
    setTimeout(function () {
      if (players[index - 1].position < 39) {
        players[index - 1].position += 1;
      } else {
        players[index - 1].position = 0;
      }
      console.log(players[index - 1].position);
      document.getElementById(`player${index}Chess`).remove();
      const node = document.createElement("div");
      node.setAttribute("id", `player${index}Chess`);
      const img = document.createElement("img");
      img.src = `img/player${index}.png`;
      node.classList.add("playerIcon", "chess");
      node.appendChild(img);
      document
        .querySelector(`.div${players[index - 1].position}`)
        .appendChild(node);
      i++;
      checkPassGo();
      if (i <= total) {
        // FOR DEV
        playerMove(index);
      } else if ((i = total)) {
        // FOR DEV
        //put all the event here;
        let currentPlace = places[players[playerTurnIndex - 1].position];
        // if place is property and no one owns it
        if (currentPlace.level != 0 && currentPlace.owner == null) {
          // if player has enough money to buy the property
          if (players[playerTurnIndex - 1].money >= currentPlace.value) {
            askBuyProperty(currentPlace);
          }
          // if player does not have enough money to buy the property
          else if (players[playerTurnIndex - 1].money < currentPlace.value) {
            noMoneyBuyProperty(currentPlace);
          }
        }
        // if place is property and someone owns it
        else if (
          currentPlace.level != 0 &&
          currentPlace.owner != null &&
          currentPlace.owner != playerTurnIndex
        ) {
          let rentReceiver = currentPlace.owner;
          // if rent receiver is not himself
          if (rentReceiver != playerTurnIndex) {
            // if rent receiver is active
            if (players[rentReceiver - 1].state == "active") {
              payRent(rentReceiver, currentPlace);
            }
            // if rent receiver is in jail
            else if (players[rentReceiver - 1].state == "jail") {
              showNoPayRent(rentReceiver);
            }
          }
        }
        // if player owns the property
        else if (playerTurnIndex == currentPlace.owner) {
          let tolvl2price = currentPlace.value * (1 / 5);
          let tolvl3price = currentPlace.value * (3 / 5);
          let tolvl4price = currentPlace.value;
          // if property level max already
          if (currentPlace.level == 4) {
            proplevelmaxed(currentPlace);
          } // if player have no money to upgrade
          else if (
            (currentPlace.level == 1 &&
              players[playerTurnIndex - 1].money < tolvl2price) ||
            (currentPlace.level == 2 &&
              players[playerTurnIndex - 1].money < tolvl3price) ||
            (currentPlace.level == 3 &&
              players[playerTurnIndex - 1].money < tolvl4price)
          ) {
            nomoneylevelupprop(currentPlace);
          } else {
            asklevelupprop(currentPlace, tolvl2price, tolvl3price, tolvl4price);
          }
        }
        // if player in go to jail box
        else if (
          currentPlace.index == 30 &&
          players[playerTurnIndex - 1].state == "active"
        ) {
          goToJail();
        }
        // if free parking
        else if (currentPlace.index == 10) {
          nothingHappen(currentPlace);
        }
        // if place is tax-related
        else if (
          currentPlace.index == 7 ||
          currentPlace.index == 12 ||
          currentPlace.index == 27 ||
          currentPlace.index == 32
        ) {
          players[playerTurnIndex - 1].money -= currentPlace.value;
          document.querySelector(
            `#player${playerTurnIndex}Money`
          ).innerText = `$${players[playerTurnIndex - 1].money}`;
          document.querySelector(
            `#player${playerTurnIndex}TotalValue`
          ).innerText = `$${
            players[playerTurnIndex - 1].money +
            players[playerTurnIndex - 1].propValue
          }`;
          document.querySelector(".messageBox").classList.add("show");
          document.querySelector(
            ".messageBoxMiddle"
          ).innerText = `你已繳交$${currentPlace.value}${currentPlace.name}。`;
          confirmBtn(nextPlayer);
        }
        // if place is chance-related
        else if (
          currentPlace.index == 2 ||
          currentPlace.index == 17 ||
          currentPlace.index == 20 ||
          currentPlace.index == 25 ||
          currentPlace.index == 37
        ) {
          Chances();
        }
        // if start (GO)
        else if (currentPlace.index == 0) {
          standGo(currentPlace);
        }
      }
    }, speed);
  }

  // Return an object containing the values of both dice and their total
  return {
    die1: die1,
    die2: die2,
    total: total,
  };
}

function checkPassGo() {
  if (players[playerTurnIndex - 1].position == 0) {
    players[playerTurnIndex - 1].money += 2000;
    document.querySelector(`#player${playerTurnIndex}Money`).innerText = `$${
      players[playerTurnIndex - 1].money
    }`;
    document.querySelector(
      `#player${playerTurnIndex}TotalValue`
    ).innerText = `$${
      players[playerTurnIndex - 1].money +
      players[playerTurnIndex - 1].propValue
    }`;
  }
}

function asklevelupprop(property, tolvl2price, tolvl3price, tolvl4price) {
  document.querySelector(".messageBox").classList.add("show");
  if (property.level == 1) {
    document.querySelector(".messageBoxMiddle").innerText =
      "請問你要花費$" +
      tolvl2price +
      "來升級" +
      property.name +
      "到" +
      (property.level + 1) +
      "等嗎?";
    confirmBtn(function () {
      levelupprop(property, 2, tolvl2price);
    });
    cancelBtn(nextPlayer);
  } else if (property.level == 2) {
    document.querySelector(".messageBoxMiddle").innerText =
      "請問你要花費$" +
      tolvl3price +
      "來升級" +
      property.name +
      "到" +
      (property.level + 1) +
      "等嗎?";
    confirmBtn(function () {
      levelupprop(property, 3, tolvl3price);
    });
    cancelBtn(nextPlayer);
  } else if (property.level == 3) {
    document.querySelector(".messageBoxMiddle").innerText =
      "請問你要花費$" +
      tolvl4price +
      "來升級" +
      property.name +
      "到" +
      (property.level + 1) +
      "等嗎?";
    confirmBtn(function () {
      levelupprop(property, 4, tolvl4price);
    });
    cancelBtn(nextPlayer);
  }
}

function levelupprop(property, tolvl, lvlupprice) {
  // calculation
  players[playerTurnIndex - 1].money -= lvlupprice;
  players[playerTurnIndex - 1].propValue += lvlupprice;
  property.currentValue += lvlupprice;
  property.level += 1;
  // search div
  const parentnode = document.querySelector(`.div${property.index}`);
  // add img
  parentnode.querySelector(".levelup").innerHTML = `<img src='./img/l${
    tolvl - 1
  }.svg' />`;
  // correct hover box message
  parentnode.querySelector(
    ".property-value"
  ).innerText = `目前物業總值：$${property.currentValue}`;
  parentnode
    .querySelector(`.property-lv${tolvl - 1}-rent`)
    .classList.remove("current-lv-rent");
  parentnode
    .querySelector(`.property-lv${tolvl}-rent`)
    .classList.add("current-lv-rent");
  // update player info box
  document.querySelector(`#player${playerTurnIndex}Money`).innerText = `$${
    players[playerTurnIndex - 1].money
  }`;
  document.querySelector(`#player${playerTurnIndex}PropValue`).innerText = `$${
    players[playerTurnIndex - 1].propValue
  }`;
  document.querySelector(`#player${playerTurnIndex}TotalValue`).innerText = `$${
    players[playerTurnIndex - 1].money + players[playerTurnIndex - 1].propValue
  }`;
  showlevelupprop(property);
}

function showlevelupprop(property) {
  document.querySelector(".messageBoxMiddle").innerText =
    "恭喜" + property.name + "已升級到" + property.level + "等。";
  confirmBtn(nextPlayer);
}

function proplevelmaxed(property) {
  document.querySelector(".messageBox").classList.add("show");
  document.querySelector(
    ".messageBoxMiddle"
  ).innerText = `${property.name}已達4等，不能再升級。`;
  confirmBtn(nextPlayer);
}

function nomoneylevelupprop(property) {
  document.querySelector(".messageBox").classList.add("show");
  document.querySelector(
    ".messageBoxMiddle"
  ).innerText = `你沒有足夠金錢升級${property.name}。`;
  confirmBtn(nextPlayer);
}

function standGo() {
  document.querySelector(".messageBox").classList.add("show");
  document.querySelector(".messageBoxMiddle").innerText = `你現正在起點。`;
  confirmBtn(nextPlayer);
}

function Chances() {
  const fateIndex = Math.floor(Math.random() * 22);
  players[playerTurnIndex - 1].money += fates[fateIndex].value;
  document.querySelector(`#player${playerTurnIndex}Money`).innerText = `$${
    players[playerTurnIndex - 1].money
  }`;
  document.querySelector(`#player${playerTurnIndex}TotalValue`).innerText = `$${
    players[playerTurnIndex - 1].money + players[playerTurnIndex - 1].propValue
  }`;
  document.querySelector(".messageBox").classList.add("show");
  document.querySelector(
    ".messageBoxMiddle"
  ).innerText = `${fates[fateIndex].text}`;
  confirmBtn(nextPlayer);
}

function payRent(rentReceiver, currentPlace) {
  let rent = 0;
  if (currentPlace.level == 1) {
    rent = currentPlace.value * (1 / 5);
  } else if (currentPlace.level == 2) {
    rent = currentPlace.value * (1 / 2);
  } else if (currentPlace.level == 3) {
    rent = currentPlace.value * 1;
  } else if (currentPlace.level == 4) {
    rent = currentPlace.value * 2;
  }
  players[playerTurnIndex - 1].money -= rent;
  players[rentReceiver - 1].money += rent;
  document.querySelector(`#player${playerTurnIndex}Money`).innerText = `$${
    players[playerTurnIndex - 1].money
  }`;
  document.querySelector(`#player${playerTurnIndex}TotalValue`).innerText = `$${
    players[playerTurnIndex - 1].money + players[playerTurnIndex - 1].propValue
  }`;
  document.querySelector(`#player${rentReceiver}Money`).innerText = `$${
    players[rentReceiver - 1].money
  }`;
  document.querySelector(`#player${rentReceiver}TotalValue`).innerText = `$${
    players[rentReceiver - 1].money + players[rentReceiver - 1].propValue
  }`;
  showPayRent(rentReceiver, rent);
}

function showPayRent(rentReceiver, rent) {
  document.querySelector(".messageBox").classList.add("show");
  document.querySelector(
    ".messageBoxMiddle"
  ).innerText = `你已交$${rent}租金給${players[rentReceiver - 1].name}。`;
  confirmBtn(nextPlayer);
}

function showNoPayRent(rentReceiver) {
  document.querySelector(".messageBox").classList.add("show");
  document.querySelector(".messageBoxMiddle").innerText = `${
    players[rentReceiver - 1].name
  }正在隔離，不用交租。`;
  confirmBtn(nextPlayer);
}

function nothingHappen(currentPlace) {
  document.querySelector(".messageBox").classList.add("show");
  document.querySelector(
    ".messageBoxMiddle"
  ).innerText = `你現正在${currentPlace.name}，沒事發生。`;
  confirmBtn(nextPlayer);
}

function goToJail() {
  players[playerTurnIndex - 1].stop += 4;
  players[playerTurnIndex - 1].state = "jail";
  document.querySelector(".messageBox").classList.add("show");
  document.querySelector(
    ".messageBoxMiddle"
  ).innerText = `你已確診新冠，請入住糟糕灣隔離${
    players[playerTurnIndex - 1].stop - 1
  }天。`;
  confirmBtn(nextPlayer);
}

function askBuyProperty(currentPlace) {
  document.querySelector(".messageBox").classList.add("show");
  document.querySelector(".messageBoxMiddle").innerText =
    "請問你要花費$" + currentPlace.value + "來購買" + currentPlace.name + "嗎?";
  confirmBtn(function () {
    buyProperty(currentPlace);
  });
  cancelBtn(nextPlayer);
}

function addPropInfo() {
  for (i = 0; i < places.length; i++) {
    if (places[i].level == 1) {
      const parent = document.querySelector(`.div${i}`);
      parent.querySelector(`.property-name`).innerText = places[i].name;
      parent.querySelector(
        `.property-price`
      ).innerText = `地價：$${places[i].value}`;
      parent.querySelector(`.property-owner`).innerText = `地主：無`;
      parent.querySelector(
        `.property-value`
      ).innerText = `目前物業總值：$${places[i].value}`;
      parent.querySelector(`.property-lv1-rent`).innerText = `1等租金：$${
        places[i].value * (1 / 10)
      }`;
      parent.querySelector(`.property-lv2-rent`).innerText = `2等租金：$${
        places[i].value * (1 / 5)
      }`;
      parent.querySelector(`.property-lv3-rent`).innerText = `3等租金：$${
        places[i].value * (1 / 2)
      }`;
      parent.querySelector(
        `.property-lv4-rent`
      ).innerText = `4等租金：$${places[i].value}`;
    }
  }
}

function buyProperty(property) {
  property.owner = players[playerTurnIndex - 1].index;
  players[playerTurnIndex - 1].money -= property.value;
  players[playerTurnIndex - 1].propValue += property.value;
  players[playerTurnIndex - 1].ownedProp.push(property);
  // change hover box
  const parentnode = document.querySelector(`.div${property.index}`);
  parentnode.querySelector(`.property-owner`).innerText = `地主：${
    players[playerTurnIndex - 1].name
  }`;
  parentnode
    .querySelector(`.property-lv1-rent`)
    .classList.add("current-lv-rent");
  // change player box info
  document.querySelector(`#player${playerTurnIndex}Money`).innerText = `$${
    players[playerTurnIndex - 1].money
  }`;
  document.querySelector(`#player${playerTurnIndex}PropValue`).innerText = `$${
    players[playerTurnIndex - 1].propValue
  }`;
  document.querySelector(`#player${playerTurnIndex}TotalValue`).innerText = `$${
    players[playerTurnIndex - 1].money + players[playerTurnIndex - 1].propValue
  }`;
  document.querySelector(`#prop${property.index}`).style.backgroundColor =
    players[playerTurnIndex - 1].color;
  parentnode.querySelector(`.propertyheader`).style.backgroundColor =
    players[playerTurnIndex - 1].color;
  buyPropertySuccess(property);
}

function buyPropertySuccess(property) {
  document.querySelector(".messageBoxMiddle").innerText =
    "恭喜你獲得" + property.name + "。";
  confirmBtn(nextPlayer);
}

function noMoneyBuyProperty(property) {
  document.querySelector(".messageBox").classList.add("show");
  document.querySelector(".messageBoxMiddle").innerText =
    "你沒有足夠金錢購買" + property.name + "。";
  confirmBtn(nextPlayer);
}

function confirmBtn(func) {
  // clear all buttons
  document.querySelector(".messageBoxBottom").innerHTML = "";
  // confirm button
  const confirmBtn = document.createElement("button");
  confirmBtn.classList.add("messageBoxBtn");
  confirmBtn.addEventListener("click", func); // confirm function
  const confirmBtnDiv = document.createElement("div");
  confirmBtnDiv.classList.add("confirmBtn");
  confirmBtnDiv.innerText = "確定";
  confirmBtn.appendChild(confirmBtnDiv);
  document.querySelector(".messageBoxBottom").appendChild(confirmBtn);
}

function cancelBtn(func) {
  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("messageBoxBtn");
  cancelBtn.addEventListener("click", func); // cancel function
  cancelBtn.innerText = "跳過";
  document.querySelector(".messageBoxBottom").appendChild(cancelBtn);
}

function askCompulsorySale() {
  document.querySelector(".messageBox").classList.add("show");
  document.querySelector(".messageBoxMiddle").innerText =
    "你的現金少於0，必須選擇下列一個物業出售予政府，售價為物業總值80%。";
  const propertyBox = document.createElement("div");
  propertyBox.classList.add("sellPropertyBox");
  document.querySelector(".messageBoxBottom").innerHTML = "";
  document.querySelector(".messageBoxBottom").appendChild(propertyBox);
  const titleLine = document.createElement("div");
  titleLine.classList.add("sellItemTitleBig");
  const boxTitleProp = document.createElement("div");
  boxTitleProp.classList.add("sellItemTitle");
  boxTitleProp.innerText = "物業";
  const boxTitleLevel = document.createElement("div");
  boxTitleLevel.classList.add("sellItemTitle");
  boxTitleLevel.innerText = "等級";
  const boxTitleSale = document.createElement("div");
  boxTitleSale.classList.add("sellItemTitle");
  boxTitleSale.innerText = "售出所得現金";
  titleLine.appendChild(boxTitleProp);
  titleLine.appendChild(boxTitleLevel);
  titleLine.appendChild(boxTitleSale);
  propertyBox.appendChild(titleLine);
  let propName;
  let propLevel;
  let propSale;
  for (i = 0; i < players[playerTurnIndex - 1].ownedProp.length; i++) {
    propLine = document.createElement("div");
    propLine.classList.add("sellItemBtn");
    let property = players[playerTurnIndex - 1].ownedProp[i];
    propLine.addEventListener("click", function () {
      confirmSell(property);
    });
    propName = document.createElement("div");
    propName.innerText = players[playerTurnIndex - 1].ownedProp[i].name;
    propLine.appendChild(propName);
    propLevel = document.createElement("div");
    propLevel.innerText = players[playerTurnIndex - 1].ownedProp[i].level;
    propLine.appendChild(propLevel);
    propSale = document.createElement("div");
    propSale.innerText =
      players[playerTurnIndex - 1].ownedProp[i].currentValue * 0.8;
    propLine.appendChild(propSale);
    propertyBox.appendChild(propLine);
  }
}

function confirmSell(property) {
  document.querySelector(".messageBoxMiddle").innerText = `你確定要以$${
    property.currentValue * 0.8
  }售出${property.name}?`;
  confirmBtn(function () {
    sold(property);
  });
  cancelBtn(askCompulsorySale);
}

function sold(property) {
  let gain = property.currentValue * 0.8;
  //add money to player
  players[playerTurnIndex - 1].money += gain;
  players[playerTurnIndex - 1].propValue -= property.currentValue;
  if (players[playerTurnIndex - 1].propValue <= 0) {
  players[playerTurnIndex - 1].propValue = 0;
  }
  //reset right bottom player info
  document.querySelector(`#player${playerTurnIndex}Money`).innerText = `$${
    players[playerTurnIndex - 1].money
  }`;
  document.querySelector(`#player${playerTurnIndex}PropValue`).innerText = `$${
    players[playerTurnIndex - 1].propValue
  }`;
  document.querySelector(`#player${playerTurnIndex}TotalValue`).innerText = `$${
    players[playerTurnIndex - 1].money + players[playerTurnIndex - 1].propValue
  }`;
  // reset map change hover box
  const parentnode = document.querySelector(`.div${property.index}`);
  parentnode.querySelector(`.property-owner`).innerText = `地主：無`;
  parentnode
    .querySelector(`.property-lv${property.level}-rent`)
    .classList.remove("current-lv-rent");
  //reset map prop box
  document.querySelector(`#prop${property.index}`).style.backgroundColor =
    "#0072bc";
  parentnode.querySelector(`.propertyheader`).style.backgroundColor = "#0072bc";
  //reset map prop level photo
  parentnode.querySelector(".levelup").innerHTML = "";
  //remove property from players array
  let ownedProp = players[playerTurnIndex - 1].ownedProp;
  let index = ownedProp.indexOf(property);
  ownedProp.splice(index, 1);
  //change owner and level in places array
  places[property.index].owner = null;
  places[property.index].propValue = places[property.index].value;
  places[property.index].level = 1;
  document.querySelector(
    ".messageBoxMiddle"
  ).innerText = `你已售出${property.name}，獲得$${gain}。`;
  confirmBtn(nextPlayer);
}

function bankrupt() {
  document.querySelector(
    ".messageBoxMiddle"
  ).innerText = `你的現金少於0，並沒有任何物業，已自動申請破產，遊戲結束！`;
  confirmBtn(function () {
    showResult();
  });
}

function nextPlayer() {
  // check bankrupt
  if (
    players[playerTurnIndex - 1].money < 0 &&
    players[playerTurnIndex - 1].ownedProp.length > 0
  ) {
    askCompulsorySale();
  } else if (
    players[playerTurnIndex - 1].money < 0 &&
    players[playerTurnIndex - 1].ownedProp.length == 0
  ) {
    bankrupt();
  } else {
    document.querySelector(".messageBox").classList.remove("show");
    document
      .getElementById("player" + playerTurnIndex + "Info")
      .classList.remove("currentPlayerBorder");
    document
      .getElementById(`player${playerTurnIndex}Chess`)
      .classList.remove("currentPlayerZIndex");
    // Start from here: playerTurnIndex = next player
    if (playerTurnIndex < players.length) {
      playerTurnIndex += 1;
    } else {
      playerTurnIndex = 1;
    }
    // change 目前玩家 and right bottom border
    document.getElementById("playernow").innerText =
      players[playerTurnIndex - 1].name;
    document
      .getElementById("player" + playerTurnIndex + "Info")
      .classList.add("currentPlayerBorder");
    document
      .getElementById(`player${playerTurnIndex}Chess`)
      .classList.add("currentPlayerZIndex");
    document.getElementById("rolldice").disabled = false; // enable rolldice button
    if (
      players[playerTurnIndex - 1].state == "jail" &&
      players[playerTurnIndex - 1].stop != 1
    ) {
      document.getElementById("rolldice").disabled = true;
      players[playerTurnIndex - 1].stop -= 1;
      showJail();
    } else if (players[playerTurnIndex - 1].stop == 1) {
      players[playerTurnIndex - 1].stop -= 1;
      players[playerTurnIndex - 1].state = "active";
    }
  }
}

function showJail() {
  document.querySelector(".messageBox").classList.add("show");
  document.querySelector(".messageBoxMiddle").innerText = `${
    players[playerTurnIndex - 1].name
  }還需隔離${players[playerTurnIndex - 1].stop}天。`;
  confirmBtn(nextPlayer);
}

function rollAndDisplayDice() {
  const result = rollDice();
  const diceContainer = document.getElementById("dice-container");

  // Clear any existing dice from the container
  diceContainer.innerHTML = "";

  // Create an image for each die and add it to the container
  const die1Img = document.createElement("div");
  die1Img.classList.add("die");
  die1Img.style.backgroundImage = `url('img/${result.die1}.svg')`;
  diceContainer.appendChild(die1Img);

  const die2Img = document.createElement("div");
  die2Img.classList.add("die");
  die2Img.style.backgroundImage = `url('img/${result.die2}.svg')`;
  diceContainer.appendChild(die2Img);
}

//Controlling Speed
function speedControl() {
  if (speed == 300) {
    speed = 1;
    document.getElementById("speedControlBtn").innerText = "遊戲速度：超快";
  } else {
    speed = 300;
    document.getElementById("speedControlBtn").innerText = "遊戲速度：正常";
  }
}

function showResult() {
  document.querySelector(".resultPage").classList.remove("hide");
  for (i = 1; i < players.length + 1; i++) {
    const playerinfo = document.querySelector(`#player${i}EndInfo`);
    playerinfo.querySelector(".playerName").innerText = `${
      players[i - 1].name
    }`;
    playerinfo.querySelector(".playerEndMoney").innerText = `$${
      players[i - 1].money
    }`;
    playerinfo.querySelector(".playerEndPropValue").innerText = `$${
      players[i - 1].propValue
    }`;
    playerinfo.querySelector(".playerEndTotalValue").innerText = `$${
      players[i - 1].propValue + players[i - 1].money
    }`;
  }
}
