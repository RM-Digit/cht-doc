---
sidebar_position: 4
---

# Security

The Chronic Network is built on the Tendermint consensus engine, allowing for the
Chronic Network to reach consensus with a proof of stake algorithm. Tendermint is
designed for secure replication of an application in a distributed state. We chose
Tendermint as our consensus engine due to the Byzantine Fault Tolerance(BFT),
this means that Chronic Network will reach consensus even if ⅓ of the network fails
arbitrarily. The ability to handle machines failing in arbitrary ways is known as
Byzantine Fault Tolerance(BFT), an old theory that has recently been adopted by the
blockchain industry. This theory of network fault tolerance was proven successful by
the likes of Bitcoin, and Ethereum. Having BFT implemented into our blockchain
allows us to reach full decentralization of the network.

In the Chronic Network, consensus is reached by the validators agreeing on
proposed blocks. The Chronic Team took network security to the next level by
implementing Sentry Nodes, these nodes act as a firewall to the validators on the
network. All sentry nodes connect to the validators using a private connection. This
means all validators have no direct connection, all validators have a private IP
address. The sentry nodes act as an intermediary for the validators to the rest of the
network, through public IP addresses. A typical validator node will run in a data
center. Most data centers provide direct connection to the networks of major cloud
providers. The validator can use those links to link to sentry nodes on the cloud. This
shifts the burden of denial-of-service from the validators to the sentry nodes. This
may require new sentry nodes to be spun up or activated to mitigate attacks. New
sentry nodes can be easily booted up from scratch, or change their IP addresses.
Due to the sentry linking to the validator in the private IP, an internet based attack
White Paper 8
cannot affect the validator directly. This will ensure validators block proposals, and
votes continue.

![logical configuration](/img/chain.png)

The third layer of information security is the implementation of Full Nodes, these
nodes hold an entire copy of the blockchain. These full nodes are configured to a
trust option(⅓ by default), this sets the trust period: this is the time that full nodes are
accountable for faulty behavior and trust level: the fraction of validators within a set
which are not faulty. The default fault tolerance is ⅓, but security can be raised to a
maximum of 1. The node verifies headers by retrieving a chain of headers, commits
and validator sets from a trusted height to the target, verifying the signatures of each
White Paper 9
intermediary signed headers until it reaches the target height. From here, the state is
verifiable with merkle proofs.
