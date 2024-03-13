## Puzzle 1
There are three houses on each side of the road.  
These six houses are labeled as P, Q, R, S, T, and U.  
The houses are of different colors, namely, Red, Blue, Green, Orange, Yellow, and White.  
The houses are of different heights.  

T, the tallest house, is exactly opposite to the Red-colored house.  
The shortest house is exactly opposite to the Green colored house.  
U, the Orange colored house, is located between P and S.  
R, the Yellow-colored house, is exactly opposite to P.  
Q, the Green colored house, is exactly opposite to U.  
P, the white-colored house, is taller than R, but shorter than S and Q.  

What is the color of the tallest house and how many houses are taller than the house R?

**Solution: The color of the tallest house is Blue. Four houses (P, Q, S, T) are taller than R.**

## Puzzle 2
A rich man was murdered on Friday afternoon. The police was called for the investigation. Police identified five suspects.   
At the time of the murder, there was the butler, the cook, the maid, the gardener and the wife.   
All suspects gave the explanations of what everyone was doing at the house during the day of the murder.  

Butler: I was fixing the table.  
Cook: I was cooking breakfast.  
Maid: I was washing the dishes.  
Gardener: I was planting flowers.  
Wife : I was watching TV.  

Without wasting the time, the police immediately arrested the killer. Who was the killer?

**Solution: The killer was the Cook. Because you don’t cook breakfast in the afternoon.**

## Puzzle 3
You have 4 bottles of milk. One of them is poisonous while the other 3 are non-poisonous.  
There is a rat which dies exactly after 10 hours of drinking the poisoned bottle.  
You have a clock that measures time only in hours.  
Suggest an optimal strategy to identify the poisoned bottle within 24 hours.  

**Solution: At the beginning of the first hour feed the rat the 1st bottle. At the start of second hour, feed the 2nd one and similarly at the start of third hour feed the 3rd bottle. If the rat dies after exactly 10 hours, the 1st bottle is poisonous. If it dies after 11 hours 2nd one contains poison, else -- the 3rd one is poisonous.**

## Puzzle 4
A person hosts a party and invites N guests to it.  
However, each guest has a condition, that each guest ‘Gi’ only stays at the party if there are at least ‘Pi’ people already at the party, otherwise leaves.  
The total number of guests N and the number of people each guest needs ‘Pi’ are given as input for each guest.  
The task is to find the total guests that are present at the party. It is also given that the guests arrive at the party in the order given in the array ‘Pi’  

Input: N = 5, Pi = {1, 0, 2, 1, 3}  
Output: ?

```javascript
function totalNumOfGuests(arr, n) { 
	let count = 0;
	for (i = 0; i < n; i++) { 
		if (arr[i] <= count) { 
			count++; 
		} 
	} 
	return count; 
}
```

**Solution: The total number of guests = 2**

## Puzzle 5
Given integers x and y which denotes the average temperature of the week except for days Day1 and Day2 respectively,
and the sum of the temperature of Day1 and Day2 as S, the task is to find the temperature of the days Day1 and Day2.

Input: x = 15, y = 10, S = 50  
Output: ?

```javascript
function findTemperature(x, y, s) {
    let diff = (x - y) * 6;
    let day2 = (diff + s) / 2;
    let day1 = s - day2;
    return `The temperature of Day1 = ${day1} and Day2 = ${day2}.`
}
```
**Solution: The temperature of Day1 = 10 and Day2 = 40**