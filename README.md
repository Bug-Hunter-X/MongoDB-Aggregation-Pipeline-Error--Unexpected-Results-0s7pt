# MongoDB Aggregation Pipeline Bug

This repository demonstrates a subtle bug in a MongoDB aggregation pipeline that leads to unexpected results.  The pipeline aims to group data, sum values, sort the results, and limit the output to the top 10 entries. However, due to an error in the pipeline construction, it produces inaccurate totals.

## Problem Description

The provided aggregation pipeline incorrectly calculates totals and produces unexpected results. Debugging requires careful examination of the pipeline stages and the dataset.  The error is not easily identifiable through basic logging and requires a deeper understanding of aggregation pipeline behavior. 

## Solution

A corrected pipeline is provided that accurately performs the desired grouping, summing, sorting, and limiting operations, resulting in the expected outcome.

## How to Reproduce

1.  Clone the repository.
2.  Set up a MongoDB database and import the sample data.
3. Run the script `bug.js` to observe the incorrect aggregation results. 
4. Run the script `bugSolution.js` to see the corrected results.