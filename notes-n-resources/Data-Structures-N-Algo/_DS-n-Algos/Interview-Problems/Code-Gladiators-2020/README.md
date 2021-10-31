TechGig Code Gladiators 2020
============================

Problem 1
-----------

### **The Powerpuff Girls**

Professor Utonium is restless because of the increasing crime in the world. The number of villains and their activities has increased to a great extent. The current trio of Powerpuff Girls is not well to fight the evils of the whole world. Professor has decided to create the maximum number of Powerpuff Girls with the ingredients he has.
There are N ingredients required in a certain quantity to create a Powerpuff Girl. Professor has all the N ingredients in his laboratory and knows the quantity of each available ingredient. He also knows the quantity of a particular ingredient required to create a Powerpuff Girl. Professor is busy with the preparations and wants to start asap.
The villains, on the other hand, want to destroy the laboratory and stop Professor Utonium from creating more Powerpuff girls. Mojo Jojo is coming prepared with ammunition and Him is leading other villains like Princess, Amoeba Boys, Sedusa, Gangreen Gang etc.

Professor does not have much time as villains will reach the laboratory soon. He is starting the process but does not know the number of Powerpuff Girls which will be created. He needs your help in determining the maximum number of Powerpuff Girls which will be created with the current quantity of ingredients. 

Can you determine the maximum number?

#### **Input Format**

The first line of input consists of the number of ingredients, N
The second line of input consists of the N space-separated integers representing the quantity of each ingredient required to create a Powerpuff Girl.
The third line of input consists of the N space-separated integers representing the quantity of each ingredient present in the laboratory.

#### **Constraints**

1<= N <=10000000 (1e7)
0<= Quantity_of_ingredient <= LLONG_MAX 

#### **Output Format**

Print the required output in a separate line.

#### **Sample TestCase**

**Input** <br />
4 <br />
2 5 6 3 <br />
20 40 90 50 <br />

**Output** <br />
8 <br />

**Code and Approach** <br />
Given [here](./Problem1-PowerPuff.py)

Problem 2
-----------

### **Beyblade World Championship**

Tyson is all prepared for the Beyblade World Championship. The tournament is team-based and each team can have N members. A player can fight against a single player only. Team G-Revolution is all excited and pumped up as they have practised a lot. Kenny, the mind of team G-Revolution, has created a database where he has the data about the power of other teams’ members and his own team members. The tournament is going to start in some time and Kenny moves to the cafeteria to have a snack before the competition.

The team G-Revolution is to fight in some time and they are tensed up as someone has kidnapped Kenny from the cafeteria. They have made a police complaint and the police are searching for Kenny. Luckily, they have found his device with all the data. The problem is, the data is present randomly and not in the order they have to fight the opponent. Team G-Revolution wants to win at any cost and for that, they need the order in which they have to fight optimally to win the maximum number of battles.

A player can win only when his/her beyblade power is strictly greater than the opponents beyblade power.

Team G-Revolution needs help with the device. Tyson has heard about your skills and called you up to help them shuffle their positions in an order such that they would be able to win the maximum number of fights. Can you help Tyson and Team G-Revolution?

#### **Input Format**
The first line of input consists of the number of test cases, T
The first line of each test case consists of the number of members each team can have, N.
The second line of each test case consists of N space-separated integers representing the power of beyblades of Team G-Revolution members.
The third line of each test case consists of N space-separated integers representing the power of beyblades of opponent team members.

#### **Constraints**
1<= T <=100000
1<= N <=100000
0<= Power of Beyblade <= LLONG_MAX

#### **Output Format**
For each test case, print the maximum number of fights Team G-Revolution can win if they go to fight in an optimal manner.

#### **Sample TestCase**
**Input** <br />
1 <br />
10 <br />
3 6 7 5 3 5 6 2 9 1 <br />
2 7 0 9 3 6 0 6 2 6 <br />

**Output**  <br />
7

**Code and Approach**

Given [here](./Problem2-Beyblade.py)

