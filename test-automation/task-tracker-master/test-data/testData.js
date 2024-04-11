const { dateToTableFormat } = require('../utils');

export const regexes = [
    /[a-zA-Z\s.]+/,
    /[a-zA-Z0-9\s.,]+/,
    /\d+/,
    /^(19\d{2}|20[0-1][0-9]|202[0-4])-([0-1]\d|2[0-1])-([0-2]\d|3[0-1])$/, 
    /edit \\ delete/
  ]

export const editExerciseData = {
    username: 'Updated User',
    description:'Updated Description',
    duration: '60',
    date: dateToTableFormat()
  }