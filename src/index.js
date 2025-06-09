export default function knightTravel(startP, endP) {
  const queue = [[startP]];
  const visited = new Set();

  while (queue.length > 0) {
    const curr = queue.shift();

    const latest = curr[curr.length - 1];

    if (latest.join() == endP.join()) {
      visited.add(curr);

      const obj = {
        moves: curr.length - 1,
        path: curr,
      };

      return obj.moves;
    } else {
      const validMoves = generateMoves(latest);

      validMoves.forEach((move) => {
        const key = move.join();

        if (!visited.has(key)) {
          const next = [...curr];
          next.push(move);

          queue.push(next);
          visited.add(latest.join());
        }
      });
    }
  }

  return;
}

function generateMoves(current) {
  const x = current[0];
  const y = current[1];

  const positions = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];

  let valid = positions.filter((pos) => {
    return pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8;
  });

  return valid;
}

console.log(knightTravel([0, 0], [1, 2]));

window.knightTravel = knightTravel;
