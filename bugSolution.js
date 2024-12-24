```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  {
    $match: { /* correct filter */ }
  },
  {
    $group: {
      _id: "$field",
      total: { $sum: 1 }
    }
  },
  {
    $sort: { total: -1 }
  },
  {
    $limit: 10 }
])
```