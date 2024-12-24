```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {
    $match: { /* some filter */ }
  },
  {
    $group: {
      _id: "$field",
      total: { $sum: "$value" }
    }
  },
  {
    $sort: { total: -1 }
  },
  {
    $limit: 10 }
])
```