// One gaming company found out that they are losing money because some players are using scripts that are playing for
// players while they are sleeping.
//
// From the access logs on their servers, developers can see which commands each player is sending. Analysing them
// they discovered that those scripts are using the same sequence of commands all the time.
//
// Your task is to cleaned up access logs to discover bots. Cleaned up access log of one player would look like an space
// separated sequence of commands sent by the player. Detect if 3 sequential commands are repeated at least 2 times from
// the cleaned up access log.
//
// For example we have following access log:
//
// left right fire jump fire back forward forward jump fire back left left right
//
// we can see that the sequence "jump fire back" is repeated two times.

exports.botProtection = function (data) {
  let hash = {};
  for (let i = 0; i < data.length - 3; i++) {
    const commandChain = [data[0], data[1], data[2]].join('');
    if (!hash[commandChain]) {
      hash[commandChain] = true;
    } else return true;
  };
  return false;
}
