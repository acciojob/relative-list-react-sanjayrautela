import React from 'react';

const relatives = [
  { id: 'relativeListItem1', name: 'Aunt May' },
  { id: 'relativeListItem2', name: 'Uncle Ben' },
  { id: 'relativeListItem3', name: 'Cousin Peter' },
  { id: 'relativeListItem4', name: 'Grandma May' },
];

function RelativesList() {
  return (
    <ol key="relativeList">
      {relatives.map((relative) => (
        <li key={relative.id}>{relative.name}</li>
      ))}
    </ol>
  );
}

export default RelativesList;
