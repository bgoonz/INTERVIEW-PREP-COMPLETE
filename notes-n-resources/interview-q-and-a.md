# Full-stack Developer Interview Questions and Answers

## <a name='toc'>Table of Contents</a>

- [Architecture](#architecture)
- [Concurrency](#concurrency)
- [Java](#java)
- [General Questions](#general)
- [WEB](#web)
- [SQL](#sql)
- [NoSQL](#nosql)
- [Transactions](#transcations)
- [Scalability](#scalability)
- [Load balancing](#load-balancing)
- [Cloud computing](#cloud-computing)
- [Distributed](#distributed)
- [Cache](#cache)
- [Networking](#networking)
- [Operating system](#os)
- [Compilers](#compilers)
- [C++](#cpp)
- [Javascript](#javascript)
- [Python](#python)
- [Go](#go)
- [Code writing](#codewriting)
- [Functional programming](#functional-programming)
- [Reactive programming](#reactive-programming)
- [Git](#git)
- [DevOps](#devOps)
- [QA](#qa)
- [Agile, Scrum, XP](#agile)
- [Algorithms](#algorithms)
- [UML](#uml)
- [Other](#other)
- [Machine learning](#machine-learning)
- [Big Data](#big-data)
- [Image processing](#image-processing)
- [Cryptography](#cryptography)
- [Security](#security)
- [Android](#android)
- [Books](#books)

#### [[⬆]](#toc) <a name='architecture'>Architecture:</a>

- _Design principles_. ([_DRY_](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), [_KISS_](https://en.wikipedia.org/wiki/KISS_principle), [_YAGNI_](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it), [_Occam's razor_](https://en.wikipedia.org/wiki/Occam%27s_razor), [_Worse is better_](https://en.wikipedia.org/wiki/Worse_is_better), [_convention over configuration_](https://en.wikipedia.org/wiki/Convention_over_configuration), [_separation of concerns_](https://en.wikipedia.org/wiki/Separation_of_concerns), [_Law of Demeter (principle of least knowledge)_](https://en.wikipedia.org/wiki/Law_of_Demeter), boy scout rule, [_single source of truth_](https://en.wikipedia.org/wiki/Single_source_of_truth), [_single version of truth_](https://en.wikipedia.org/wiki/Single_version_of_the_truth), [_principle of least astonishment_](https://en.wikipedia.org/wiki/Principle_of_least_astonishment), [_let it crash principle_](https://en.wikipedia.org/wiki/Crash-only_software), [_inversion of control_](https://en.wikipedia.org/wiki/Inversion_of_control))
- [_SOLID_](<https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)>)

| Rule                                                                                                 | Description                                                                                                                                                                                                                                             |
| :--------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**S**ingle responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle) | A module should be responsible to one, and only one, actor.                                                                                                                                                                                             |
| [**O**pen/closed principle](https://en.wikipedia.org/wiki/Open/closed_principle)                     | A software artifact should be open for extension but closed for modification.                                                                                                                                                                           |
| [**L**iskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle)     | It should be possible to substitute base class with derived class.                                                                                                                                                                                      |
| [**I**nterface segregation principle](https://en.wikipedia.org/wiki/Interface_segregation_principle) | Many client-specific interfaces are better than one general-purpose interface.                                                                                                                                                                          |
| [**D**ependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)   | Depend upon Abstractions but not on concretions. This means that each module should be separated from other using an abstract layer which binds them together. Source code dependency points in the opposite direction compared to the flow of control. |

- [_The Clean Architecture_](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)
- [_Clean Code Cheat Sheet_](https://www.planetgeek.ch/wp-content/uploads/2014/11/Clean-Code-V2.4.pdf)
- [_One key abstraction_](http://wiki3.cosc.canterbury.ac.nz/index.php/One_key_abstraction)
- [_Aspect-oriented programming_](https://en.wikipedia.org/wiki/Aspect-oriented_programming)
- [_The Twelve-Factor App_](http://12factor.net)
- [_Domain-driven design_](https://en.wikipedia.org/wiki/Domain-driven_design)
- [_Microservices_](https://en.wikipedia.org/wiki/Microservices) are a style of software architecture that involves delivering systems as a set of very small, granular, independent collaborating services.
  - Pros of _microservices_ (The services are easy to replace, Services can be implemented using different programming languages, databases, hardware and software environment, depending on what fits best)
- _Design patterns_.
  - **Creational**: [_Builder_](https://refactoring.guru/design-patterns/builder), [_Object Pool_](https://en.wikipedia.org/wiki/Object_pool_pattern), [_Factory Method_](https://refactoring.guru/design-patterns/factory-method), [_Singleton_](https://refactoring.guru/design-patterns/singleton), [_Multiton_](https://en.wikipedia.org/wiki/Multiton_pattern), [_Prototype_](https://refactoring.guru/design-patterns/prototype), [_Abstract Factory_](https://refactoring.guru/design-patterns/abstract-factory)
  - **Structural**: [_Adapter_](https://refactoring.guru/design-patterns/adapter), [_Bridge_](https://refactoring.guru/design-patterns/bridge), [_Composite_](https://refactoring.guru/design-patterns/composite), [_Decorator_](https://refactoring.guru/design-patterns/decorator), [_Facade_](https://refactoring.guru/design-patterns/facade), [_Flyweight_](https://refactoring.guru/design-patterns/flyweight), [_Proxy_](https://refactoring.guru/design-patterns/proxy)
  - **Behavioral**: [_Chain of Responsibility_](https://refactoring.guru/design-patterns/chain-of-responsibility), [_Command_](https://refactoring.guru/design-patterns/command), [_Interpreter_](https://en.wikipedia.org/wiki/Interpreter_pattern), [_Iterator_](https://refactoring.guru/design-patterns/iterator), [_Mediator_](https://refactoring.guru/design-patterns/mediator), [_Memento_](https://refactoring.guru/design-patterns/memento), [_Observer_](https://refactoring.guru/design-patterns/observer), [_State_](https://refactoring.guru/design-patterns/state), [_Strategy_](https://refactoring.guru/design-patterns/strategy), [_Template Method_](https://refactoring.guru/design-patterns/template-method), [_Visitor_](https://refactoring.guru/design-patterns/visitor)
- [_Enterprise integration patterns_](https://en.wikipedia.org/wiki/Enterprise_Integration_Patterns), [_SOA patterns_](www.soapatterns.org).
- [_3-tier architecture_](https://en.wikipedia.org/wiki/Multitier_architecture) (Presentation tier, Application tier, Data tier)
- _3-layer architecture_ (DAO (Repository), Business (Service) layer, Controller)
- [_REST_](https://en.wikipedia.org/wiki/Representational_state_transfer) (Representational state transfer), [_RPC_](https://en.wikipedia.org/wiki/Remote_procedure_call)
- [_Idempotent operation_](https://en.wikipedia.org/wiki/Idempotence) (The PUT and DELETE methods are referred to as idempotent, meaning that the operation will produce the same result no matter how many times it is repeated)
- _Nullipotent operation_ (GET method is a safe method (or nullipotent), meaning that calling it produces no side-effects)
- [_Naked objects_](https://en.wikipedia.org/wiki/Naked_objects), [_Restful objects_](https://en.wikipedia.org/wiki/Restful_Objects).
- Why do you need _web server_ (tomcat, jetty)?
- [_Inheritance_](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)>) vs [_Composition_](https://en.wikipedia.org/wiki/Object_composition) (Inheritance - is-a relationship, whether clients will want to use the subclass type as a superclass type. Composition - has-a or part-of relationship).
- [_Multiple inheritance (diamond) problem_](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem)
- Advantages of using _modules_. (reuse, decoupling, namespace)
- Drawbacks of not using [_separation of concerns_](https://en.wikipedia.org/wiki/Separation_of_concerns)
  - Adding new features will take an order of magnitude longer
  - Impossible to optimize
  - Extremely difficult to test
  - Fixing and debugging can be a nightmare (fixing something in one place can lead to something else breaking that seems completely unrelated).
- What is [_uniform access principle_](https://en.wikipedia.org/wiki/Uniform_access_principle)? (client code should not be affected by a decision to implement an attribute as a field or method)
- [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law) (organizations which design systems ... are constrained to produce designs which are copies of the communication structures of these organizations)
- [GRASP](<https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)>)

#### [[⬆]](#toc) <a name='concurrency'>Concurrency:</a>

- What is [_deadlock_](https://en.wikipedia.org/wiki/Deadlock), [_livelock_](https://en.wikipedia.org/wiki/Deadlock#Livelock)? (Deadlock is a situation in which two or more competing actions are each waiting for the other to finish, and thus neither ever does. A livelock is similar to a deadlock, except that the states of the processes involved in the livelock constantly change with regard to one another, none progressing.)
- [_Deadlock avoidance_](https://www.geeksforgeeks.org/deadlock-prevention). (prevention, detection, avoidance (Mutex hierarchy), and recovery)
- What is [_starvation_](<https://en.wikipedia.org/wiki/Starvation_(computer_science)>)? (a problem encountered in concurrent computing where a process is perpetually denied necessary resources to process its work)
- What is [_race condition_](https://en.wikipedia.org/wiki/Race_condition)? (Behavior of software system where the output is dependent on the sequence or timing of other uncontrollable events)
- What is [_happens-before_](https://en.wikipedia.org/wiki/Happened-before) relation?
- What is [_thread contention_](https://stackoverflow.com/questions/1970345/what-is-thread-contention)? (Contention is simply when two threads try to access either the same resource or related resources in such a way that at least one of the contending threads runs more slowly than it would if the other thread(s) were not running). Contention occurs when multiple threads try to acquire a lock at the same time
- What is a [_thread-safe_](https://en.wikipedia.org/wiki/Thread_safety) function? (Can be safely invoked by multiple threads at the same time)
- [_Publish/Subscribe_](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) pattern
- What is [_2-phase locking_](https://en.wikipedia.org/wiki/Two-phase_locking)? (Growing phase, shrinking phase. Guarantees serializablity for transactions, doesn't prevent deadlock).
- What is the difference between _thread_ and _process_? (Threads (of the same process) run in a shared memory space, while processes run in separate memory spaces)
- What is [_false sharing_](https://en.wikipedia.org/wiki/False_sharing), [_cache pollution_](https://en.wikipedia.org/wiki/Cache_pollution), _cache miss_, [_thread affinity_](https://en.wikipedia.org/wiki/Processor_affinity), [_ABA-problem_](https://en.wikipedia.org/wiki/ABA_problem), [_speculative execution_](https://en.wikipedia.org/wiki/Speculative_execution)?
- What is a

  - [_obstruction-free_](https://en.wikipedia.org/wiki/Non-blocking_algorithm#Obstruction-freedom) - if all other threads are paused, then any given thread will complete its operation in a bounded number of steps
  - [_lock-free_](https://en.wikipedia.org/wiki/Non-blocking_algorithm#Lock-freedom) - if multiple threads are operating on a data structure, then after a bounded number of steps one of them will complete its operation
  - [_wait-free_](https://en.wikipedia.org/wiki/Non-blocking_algorithm#Wait-freedom) - every thread operating on a data structure will complete its operation in a bounded number of steps, even if other threads are also operating on the data structure

  algorithm?

- What is [_sequential consistency_](https://en.wikipedia.org/wiki/Sequential_consistency)? (The result of any execution is the same as if the operations of all the processors were executed in some sequential order, and the operations of each individual processor appear in this sequence in the order specified by its program).
- What is a [_memory barrier_](https://en.wikipedia.org/wiki/Memory_barrier)? (A memory barrier, also known as a membar, memory fence or fence instruction, is a type of barrier instruction that causes a CPU or compiler to enforce an ordering constraint on memory operations issued before and after the barrier instruction)
- Synchonization aids in Java
  - CountDownLatch
  - CyclicBarrier
  - Phaser
  - ReentrantLock
  - Exchanger
  - Semaphore
  - LinkedTransferQueue
- What is _data race_? (When a program contains two conflicting accesses that are not ordered by a [happens-before](https://docs.oracle.com/javase/specs/jls/se12/html/jls-17.html#jls-17.4.5) relationship, it is said to contain a data race. Two accesses to (reads of or writes to) the same variable are said to be conflicting if at least one of the accesses is a write. But see [this](https://stackoverflow.com/questions/16615140/is-volatile-read-happens-before-volatile-write/16615355#16615355))
- Java [_memory model_](https://docs.oracle.com/javase/specs/jls/se12/html/jls-17.html#jls-17.4)
  - A program is correctly synchronized if and only if all sequentially consistent executions are free of data races
  - Correctly synchronized programs have sequentially consistent semantics. If a program is correctly synchronized, then all executions of the program will appear to be sequentially consistent
  - Causality requirement for incorrectly synchronized programs: [link](https://pdfs.semanticscholar.org/c132/11697f5c803221533a07bd6db839fa60b7b8.pdf)
- What is _monitor_ in Java? (Each object in Java is associated with a monitor, which a thread can lock or unlock)
- What is _safe publication_?
- What is _wait_/_notify_?
- [_Amdahl's law_](https://en.wikipedia.org/wiki/Amdahl%27s_law)? (Speedup = 1 / (1 - p + p / n))
- [_Dining philosophers problem_](https://en.wikipedia.org/wiki/Dining_philosophers_problem) (Resource hierarchy (first take lower-indexed fork), arbitrator, communication (dirty/clean forks)).
- [_Produces/consumer_](https://en.wikipedia.org/wiki/Producer%E2%80%93consumer_problem) problem.
- [_Readers/writers_](https://en.wikipedia.org/wiki/Readers%E2%80%93writers_problem) problem.
- [_Transactional memory_](https://en.wikipedia.org/wiki/Software_transactional_memory)
- [_Coroutine_](https://en.wikipedia.org/wiki/Coroutine)

#### [[⬆]](#toc) <a name='java'>Java:</a>

- [_PhantomReference_](https://en.wikipedia.org/wiki/Phantom_reference), [_WeakReference_](https://en.wikipedia.org/wiki/Weak_reference), [_SoftReference_](https://en.wikipedia.org/wiki/Soft_reference), _finalize()_, _ReferenceQueue_.
- How to correctly stop a thread? (Thread.interrupt())
- What is _Spring_? (Spring Framework is an application container for Java that supplies many useful features, such as Inversion of Control, Dependency Injection, abstract data access, transaction management, and more)
  - Spring is a framework for dependency injection: a design pattern that allows the developer to build very decoupled systems by injecting dependencies into classes.
  - It elegantly wraps Java libraries and makes then much easier to use in your application.
  - Included in the framework are implementations of commonly used patterns such as REST and MVC web framework which are predominately use by in web applications.
- What is _Spring-Boot_?
- What is _Hibernate_ and JPA (Caches, lazy-loading)?
- _Garbage collection_. (G1, Young/Old generation collectors combination examples: PS Scavenge/PS MarkSweep, Copy/MarkSweepCompact)
- How to write _benchmarks_? ([jmh](http://openjdk.java.net/projects/code-tools/jmh/))
- What are Java 9 modularity?
- What is OSGI? (Specification describes a modular system and a service platform for the Java programming language that implements a complete and dynamic component model. Each bundle has its own classpath. Dependency hell avoidance. META-INF/MANIFEST.MF contains OSGI-info)
- Serializable / Externalizable
- What is a _servlet_ (versions of servlet api, Servlet 4.0)?
- What is a _servlet filter_? How to implement _GZipFilter_? (ResponseWrapper)
- What is _generics_ and PECS (producer extends and consumer super)?
- What is the difference between <?>, \<Object\>, <? extends Object> and no generic type? [link1](http://stackoverflow.com/questions/8055389/whats-the-difference-between-and-extends-object-in-java-generics) [link2](http://stackoverflow.com/questions/678822/what-is-the-difference-between-and-object-in-java-generics)
- Explain method signature for [Collections.max(...)](https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#max-java.util.Collection-), [Collections.fill(...)](https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#fill-java.util.List-T-), [Collections.copy(...)](https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#copy-java.util.List-java.util.List-), [Collections.sort(...)](https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#sort-java.util.List-java.util.Comparator-)
- Why are arrays covariant but generics are invariant? [link](http://stackoverflow.com/questions/18666710/why-are-arrays-covariant-but-generics-are-invariant)
- Major specs: JAX-RS, JAX-WS, JMS, JAXB, XSLT, XPATH, JNDI, JMX, JDBC, XML(SAX, DOM, StAX)
- [_Performance Diagnostic Methodology_](https://dzone.com/articles/how-to-solve-your-java-performance-problems-part-2)

#### [[⬆]](#toc) <a name='general'>General Questions:</a>

- [_Polymorphism_](<https://en.wikipedia.org/wiki/Polymorphism_(computer_science)>) (Variable of type Shape could refer to an object of type Square, Circle... Ability of a function to handle objects of many types)
- [_Encapsulation_](<https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)>) (Packing of data and functions into a single component)
- [_Virtual function_](https://en.wikipedia.org/wiki/Virtual_function) (Overridable function)
- [_Virtual method table_](https://en.wikipedia.org/wiki/Virtual_method_table)
- [_Dynamic binding_](https://en.wikipedia.org/wiki/Late_binding) (Actual method implementation invoked is determined at run time based on the class of the object, not the type of the variable or expression)
- How does [_garbage collector_](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) work? (Mark and sweep: mark: traverse object graph starting from root objects, sweep: garbage collect unmarked objects. Optimizations: young/old generations, incremental mark and sweep)
- [_Tail recursion_](https://en.wikipedia.org/wiki/Tail_call) (A tail call is a subroutine call performed as the final action of a procedure)
- [_Semantic versioning_](http://semver.org)

#### [[⬆]](#toc) <a name='web'>WEB:</a>

- WEB security vulnerabilities ([_XSS_](https://en.wikipedia.org/wiki/Cross-site_scripting), [_CSRF_](https://en.wikipedia.org/wiki/Cross-site_request_forgery), [_session fixation_](https://en.wikipedia.org/wiki/Session_fixation), [_SQL injection_](https://en.wikipedia.org/wiki/SQL_injection), [_man-in-the-middle_](https://en.wikipedia.org/wiki/Man-in-the-middle_attack), [_buffer overflow_](https://en.wikipedia.org/wiki/Buffer_overflow))
- _CSRF prevention_ (CSRF-token)
- What is [_JSONP_](https://en.wikipedia.org/wiki/JSONP), [_CORS_](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)? (A communication technique used in JavaScript programs running in web browsers to request data from a server in a different domain, something prohibited by typical web browsers because of the same-origin policy)
- [_HTTPS_](https://en.wikipedia.org/wiki/HTTPS) negotiation steps.
- What is HTTP Strict Transport Security ([_HSTS_](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security))? (Prevents Man in the Middle attacks)
- Browser-server communication methods: WebSocket, EventSource, Comet(Polling, Long-Polling, Streaming)
- [_Character encoding_](https://en.wikipedia.org/wiki/Character_encoding)
- What is [_role-based access control_](https://en.wikipedia.org/wiki/Role-based_access_control) and [_access control list_](https://en.wikipedia.org/wiki/Access_control_list)?
- What is session and persistent cookies, sessionStorage and [localStorage](https://en.wikipedia.org/wiki/Web_storage#Local_and_session_storage)?
- How to implement _remember-me_? (http://jaspan.com/improved_persistent_login_cookie_best_practice)
- Authentication using cookies, [_JWT_](https://en.wikipedia.org/wiki/JSON_Web_Token) (JSON Web Tokens).

#### [[⬆]](#toc) <a name='sql'>SQL:</a>

- _SQL join types_ (inner join, left/right outer join, full outer join, cross join)
  ![Join types](https://habrastorage.org/files/7ff/b2c/3a2/7ffb2c3a25b74dcf9eec013282b9cfb4.png "Join types"))
- _SQL normal forms_
  1. The domain of each attribute contains only atomic values, and the value of each attribute contains only a single value from that domain
  1. No non-prime attribute in the table is functionally dependent on a proper subset of any candidate key
  1. Every non-prime attribute is non-transitively dependent on every candidate key in the table. BCNF.Every non-trivial functional dependency in the table is a dependency on a superkey.)
- _Isolation levels_ and Anomalies

| Isolation_level\Anomaly | Lost_update (because of rollback) | Dirty_read | Non_repeatable_reads second_lost_update | Phantoms  | Write_skew |
| :---------------------- | :-------------------------------: | :--------: | :-------------------------------------: | :-------: | :--------: |
| Read Uncommitted        |                 -                 | may occur  |                may occur                | may occur | may occur  |
| Read Committed          |                 -                 |     -      |                may occur                | may occur | may occur  |
| Repeatable Read         |                 -                 |     -      |                    -                    | may occur | may occur  |
| Snapshot                |                 -                 |     -      |                    -                    |     -     | may occur  |
| Serializable            |                 -                 |     -      |                    -                    |     -     |     -      |

#### [[⬆]](#toc) <a name='nosql'>NoSQL:</a>

- Types of NoSQL databases?
  - Document Stores (MongoDB, Couchbase)
  - Key-Value Stores (Redis, Volgemort)
  - Column Stores (Cassandra)
  - Graph Stores (Neo4j, Giraph)

#### [[⬆]](#toc) <a name='transactions'>Transactions:</a>

- [_ACID_](https://en.wikipedia.org/wiki/ACID)
- [_2-phase commit protocol_](https://en.wikipedia.org/wiki/Two-phase_commit_protocol)
- [_3-phase commit protocol_](https://en.wikipedia.org/wiki/Three-phase_commit_protocol)
- What is _pessimistic_ / [_optimistic_](https://en.wikipedia.org/wiki/Optimistic_concurrency_control) locking?

#### [[⬆]](#toc) <a name='scalability'>Scalability:</a>

- Horizontal and vertical scaling.
- How to scale database? (Data partitioning, sharding(vertical/horizontal), replication(master-slave, master-master)).
- _Denormalization_.
- What is _synchronous multimaster replication_? (Each server can accept write requests, and modified data is transmitted from the original server to every other server before each transaction commits)
- What is _asynchronous multimaster replication_? (Each server works independently, and periodically communicates with the other servers to identify conflicting transactions. The conflicts can be resolved by users or conflict resolution rules)
- When to use messaging queue?
- MongoDB, Redis.
- Hadoop basics.

#### [[⬆]](#toc) <a name='load-balancing'>Load balancing:</a>

- sticky/non-sticky sessions
- _Sticky sessions_ vs storing sessions in Redis.

#### [[⬆]](#toc) <a name='cloud-computing'>Cloud computing:</a>

- What is [_cloud computing_](https://en.wikipedia.org/wiki/Cloud_computing)? (Cloud computing platform is a fully automated server platform that allows users to purchase, remotely create, dynamically scale, and administer system)
- [_Amazon web services_](https://en.wikipedia.org/wiki/Amazon_Web_Services)
- [_Google Cloud Platform_](https://en.wikipedia.org/wiki/Google_Cloud_Platform)
- [_Microsoft Azure_](https://en.wikipedia.org/wiki/Microsoft_Azure)

#### [[⬆]](#toc) <a name='distributed'>Distributed:</a>

- [_Consensus_](<https://en.wikipedia.org/wiki/Consensus_(computer_science)>)
- [_Raft_](<https://en.wikipedia.org/wiki/Raft_(computer_science)>) ([In Search of an Understandable Consensus Algorithm](https://raft.github.io/raft.pdf))
- [_Paxos_](<https://en.wikipedia.org/wiki/Paxos_(computer_science)>)
- What is [_CAP theorem_](https://en.wikipedia.org/wiki/CAP_theorem)? [Illustrated proof](https://mwhittaker.github.io/blog/an_illustrated_proof_of_the_cap_theorem/). [CAP-FAQ](http://www.the-paper-trail.org/page/cap-faq) (It is impossible for a distributed computer system to simultaneously provide all three of the following guarantees: _consistency_, _availability_, _partition tolerance_). [Gilbert and Lynch's paper](https://users.ece.cmu.edu/~adrian/731-sp04/readings/GL-cap.pdf). ["Please stop calling databases CP or AP"](https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html)).
  ![CAP theorem](http://guide.couchdb.org/draft/consistency/01.png "CAP theorem")
- What is _map-reduce_? (Word count example)
- _Sharding counters_.
- Distributed software:
  - Distributed streaming platforms: **kafka**
  - Distributed key-value store: **zookeeper**, **etcd**, **Consul**
  - Map-reduce: **hadoop**, **spark**
  - Distributed file system: **hbase**
  - Cluster management: **kubernetes**, **docker-swarm**, **mesos**
- [Herlihy's consensus hierarchy](https://en.wikipedia.org/wiki/Read-modify-write). Every shared object can be assigned a consensus number, which is the maximum number of processes for which the object can solve wait-free consensus in an asynchronous system.

```
1 Read-write registers
2 Test-and-set, swap, fetch-and-add, queue, stack
⋮ ⋮
∞ Augmented queue, compare-and-swap, sticky byte
```

- [_Consistency models_](https://en.wikipedia.org/wiki/Consistency_model):
  - [_Sequential consistency_](https://en.wikipedia.org/wiki/Sequential_consistency)
  - [_Causal consistency_](https://en.wikipedia.org/wiki/Causal_consistency)
  - [_Eventual consistency_](https://en.wikipedia.org/wiki/Eventual_consistency)
  - [_Monotonic Read Consistency_](https://en.wikipedia.org/wiki/Consistency_model#Monotonic_Read_Consistency)
  - [_Monotonic Write Consistency_](https://en.wikipedia.org/wiki/Consistency_model#Monotonic_Write_Consistency)
  - [_Read-your-writes Consistency_](https://en.wikipedia.org/wiki/Consistency_model#Read-your-writes_Consistency)
  - [_Writes-follows-reads Consistency_](https://en.wikipedia.org/wiki/Consistency_model#Writes-follows-reads_Consistency)
- _Consensus number_. Maximum number of threads for which objects of the class can solve consensus problem.
- [_Logical clock_](https://en.wikipedia.org/wiki/Logical_clock)
- [_Vector clock_](https://en.wikipedia.org/wiki/Vector_clock)

#### [[⬆]](#toc) <a name='cache'>Cache:</a>

- What is _write-through_ and _write-behind_ caching? (write-through (synchronous), write-behind (asynchronous))
- HTTP cache options?

#### [[⬆]](#toc) <a name='networking'>Networking:</a>

- OSI model (Physical, Data link, Network, Transport, Session, Presentation, Application)
- Multithreading vs select
- [_Switch_](https://en.wikipedia.org/wiki/Network_switch), [_hub_](https://en.wikipedia.org/wiki/Ethernet_hub), [_router_](<https://en.wikipedia.org/wiki/Router_(computing)>)
- [_TCP congestion_](https://en.wikipedia.org/wiki/TCP_congestion_control)
- _TCP back-pressure_

#### [[⬆]](#toc) <a name='os'>Operating system:</a>

- What is [_memory mapped_](https://en.wikipedia.org/wiki/Memory-mapped_file) file and its benefits?
- _Interprocess communication_ methods. (Pipes, Events, Mailboxes/Ports (can be implemented by using shared memory and semaphores), Direct Message Passing).
- [_Virtual memory_](https://en.wikipedia.org/wiki/Virtual_memory) organization.
- _Process scheduler_.

#### [[⬆]](#toc) <a name='compilers'>Compilers:</a>

- [_Recursive descent parser_](https://en.wikipedia.org/wiki/Recursive_descent_parser)
- [_LL parser_](https://en.wikipedia.org/wiki/LL_parser)
- [_LR parser_](https://en.wikipedia.org/wiki/LR_parser)
- [_Context-free grammar_](https://en.wikipedia.org/wiki/Context-free_grammar)
- [_Chomsky hierarchy_](https://en.wikipedia.org/wiki/Chomsky_hierarchy)

#### [[⬆]](#toc) <a name='cpp'>C++:</a>

- [_C++ standard_](http://eel.is/c++draft/)
- [_Memory model_](https://en.cppreference.com/w/cpp/language/memory_model)
- _Data race_. When an evaluation of an expression writes to a memory location and another evaluation reads or modifies the same memory location, the expressions are said to conflict. A program that has two conflicting evaluations has a data race unless

  - both evaluations execute on the same thread or in the same signal handler, or
  - both conflicting evaluations are atomic operations (see std::atomic), or
  - one of the conflicting evaluations happens-before another (see std::memory_order)

  If a data race occurs, the behavior of the program is undefined.

- [_SFINAE_](https://en.cppreference.com/w/cpp/language/sfinae) [1](https://cpppatterns.com/patterns/function-template-sfinae.html)
- [*PImpl*] https://en.cppreference.com/w/cpp/language/pimpl

#### [[⬆]](#toc) <a name='javascript'>Javascript:</a>

- this keyword
- How _prototypes_ work?
- inheritance
- differences between == and === (http://dorey.github.io/JavaScript-Equality-Table/)
- closures
- recursion
- What is _MVC_, _MVP_, _MVVM_?
- What is _promise_?
- What is event _bubbling_ and _capturing_? (target.addEventListener(type, listener[, useCapture]))
- What is _AMD_(Asynchronous Module Design) and _CommonJS_?
- What is _jQuery_?

#### [[⬆]](#toc) <a name='python'>Python:</a>

- [Slice notation](https://stackoverflow.com/questions/509211/understanding-slice-notation/509295#509295)

#### [[⬆]](#toc) <a name='go'>Go:</a>

- [Language Specification](https://golang.org/ref/spec)
- [Memory Model](https://golang.org/ref/mem)

#### [[⬆]](#toc) <a name='codewriting'>Codewriting:</a>

- Implement binary search

```java
int binarySearch(int[] a, int fromInclusive, int toExclusive, int key) {
    int low = fromInclusive;
    int high = toExclusive - 1;
    while (low <= high) {
        int mid = (low + high) >>> 1;
        int midVal = a[mid];
        if (midVal < key)
            low = mid + 1;
        else if (midVal > key)
            high = mid - 1;
        else
            return mid; // key found
    }
    return -(low + 1); // key not found
}
```

- Implement quick sort

```java
void qSort(int[] a, int fromInclusive, int toInclusive) {
    int i = fromInclusive;
    int j = toInclusive;
    if (i >= j) return;
    int separator = a[i + random.nextInt(j - i + 1)];
    do {
        while (a[i] < separator) ++i;
        while (a[j] > separator) --j;
        if (i > j) break;
        int t = a[i];
        a[i] = a[j];
        a[j] = t;
        ++i;
        --j;
    } while (i <= j);
    qSort(a, fromInclusive, j);
    qSort(a, i, toInclusive);
}
```

#### [[⬆]](#toc) <a name='functional-programming'>Functional programming:</a>

- [_Referential transparency_](https://en.wikipedia.org/wiki/Referential_transparency)
- What is [_Monad_](<https://en.wikipedia.org/wiki/Monad_(functional_programming)>)?

#### [[⬆]](#toc) <a name='reactive-programming'>Reactive programming:</a>

- [_The Reactive Manifesto_](http://www.reactivemanifesto.org) (responsive, resilient, elastic, message driven)
- [Reactive extensions](http://reactivex.io)
- What is _asynchronous_ and _non-blocking_? [link](https://www.linkedin.com/pulse/java-servlets-asynchronous-non-blocking-aliaksandr-liakh)

#### [[⬆]](#toc) <a name='git'>Git:</a>

- _Git_ workflow? (Master: production-ready state; Develop: latest delivered development changes for the next release; Feature Branches; Release Branches; Hotfixes) ![Git workflow](http://nvie.com/img/git-model@2x.png "Git workflow") http://nvie.com/posts/a-successful-git-branching-model/
- What is a rebase?

#### [[⬆]](#toc) <a name='devOps'>DevOps:</a>

- What is _Blue-green Deployment_, _Canary release_, _A/B testing_? [link](https://www.javacodegeeks.com/2016/02/blue-green-deployment.html)
- What is _Docker_?

#### [[⬆]](#toc) <a name='qa'>QA:</a>

- What is _unit test_? (A test that purely tests a single unit of functionality)
- What is _component test_?
- What is _integration test_? (Examine several parts of a system to make sure that when integrated, these parts behave as expected)
- What is _user acceptance test_? BDD?
- Unit tests advantages?
- Types of tests: acceptance testing, functional testing, smoke testing, regression testing, unit testing, integration testing, stress testing, (Load, Performance, Sanity, Stability, Security, Feature, Progression, Installation, Business).
- Differences between stub and mock? (A stub is a test double with preprogrammed behavior. Mocks are stubs with preprogrammed expectations)
- Selenium tests and webdriver.
- How to test multithreading code?
- What is _Consumer Driven Contract_? [link](https://cloud.spring.io/spring-cloud-contract/spring-cloud-contract.html)
- [Types of tests](https://stackify.com/ultimate-guide-performance-testing-and-software-testing)

#### [[⬆]](#toc) <a name='agile'>Agile:</a>

- What is Agile? (http://agilemanifesto.org/principles.html)
  - Individuals and interactions over Processes and tools
  - Working software over Comprehensive documentation
  - Customer collaboration over Contract negotiation
  - Responding to change over Following a plan
- What is Scrum? (Roles: product owner, development team, scrum master. Events: sprint)
- What are the differences between Scrum and Waterfall? ( http://www.leanagiletraining.com/agile/waterfall-versus-scrum-how-do-they-compare/)
- What is XP? ()
- What is Kanban?
- What is Lean development?

#### [[⬆]](#toc) <a name='algorithms'>Algorithms:</a>

- What Ο(n), Ω(n), Θ(n)?
- What is NP, NP-completeness, NP-hardness with examples?

#### [[⬆]](#toc) <a name='other'>Other:</a>

- How to find memory leak. (Memory snapshot diff).
- Profiling: sampling and instrumentation.
- Regular expressions. (Examples)
- What are your goals to work in our company? (3 categories: professional, financial, social)
- What is _virtualization_?
- What is total/partial order?
- How to work with legacy code? (http://programmers.stackexchange.com/a/122024)

#### [[⬆]](#toc) <a name='machine-learning'>Machine learning:</a>

- [_Bayes' theorem_](https://en.wikipedia.org/wiki/Bayes%27_theorem):

![equation](<http://latex.codecogs.com/svg.latex?\inline&space;\fn_cs&space;P(A|B)&space;=&space;\dfrac{P(B|A)\times&space;P(A)}{P(B)},P(B)&space;=&space;\sum\limits_{i}{P(Ai)\times&space;P(B|Ai)}>)

- [_Confidence interval_](https://en.wikipedia.org/wiki/Confidence_interval)
- [_p-value_](https://en.wikipedia.org/wiki/P-value)
- [_Overfitting_](https://en.wikipedia.org/wiki/Overfitting)
- [_Bias–variance tradeoff_](https://en.wikipedia.org/wiki/Bias–variance_tradeoff)
- [_Backpropagation_](https://en.wikipedia.org/wiki/Backpropagation)
- [_Reinforcement learning_](https://en.wikipedia.org/wiki/Reinforcement_learning)
- [_Curse of dimensionality_](https://en.wikipedia.org/wiki/Curse_of_dimensionality)
- [_Cross-validation_](<https://en.wikipedia.org/wiki/Cross-validation_(statistics)>)
- [_Bag-of-words_](https://en.wikipedia.org/wiki/Bag-of-words_model), [_Stop words_](https://en.wikipedia.org/wiki/Stop_words), [_n-gram_](https://en.wikipedia.org/wiki/N-gram), [_tf–idf_](https://en.wikipedia.org/wiki/Tf%E2%80%93idf), [_Latent semantic analysis_](https://en.wikipedia.org/wiki/Latent_semantic_analysis)
- [_Linear regression_](https://en.wikipedia.org/wiki/Linear_regression)
- [_Logistic regression_](https://en.wikipedia.org/wiki/Logistic_regression)
- [_Naive Bayes classifier_](https://en.wikipedia.org/wiki/Naive_Bayes_classifier)
- [_Support vector machine_](https://en.wikipedia.org/wiki/Support_vector_machine)
- [_Principal component analysis_](https://en.wikipedia.org/wiki/Principal_component_analysis)
- [_Deep learning_](https://en.wikipedia.org/wiki/Deep_learning)

#### [[⬆]](#toc) <a name='big-data'>Big Data:</a>

- [_Lambda architecture_](https://en.wikipedia.org/wiki/Lambda_architecture)
- [_HyperLogLog_](https://en.wikipedia.org/wiki/HyperLogLog)
- [_Event sourcing_](http://microservices.io/patterns/data/event-sourcing.html)

#### [[⬆]](#toc) <a name='image-processing'>Image processing:</a>

#### [[⬆]](#toc) <a name='cryptography'>Cryptography:</a>

- [_Public-key cryptography_](https://en.wikipedia.org/wiki/Public-key_cryptography)
- [_Public key certificate_](https://en.wikipedia.org/wiki/Public_key_certificate)
- [_Blockchain_](https://en.wikipedia.org/wiki/Blockchain)
- [_Proof-of-work system_](https://en.wikipedia.org/wiki/Proof-of-work_system)
- [_Secret sharing_](https://en.wikipedia.org/wiki/Secret_sharing)
- [_RSA_](<https://en.wikipedia.org/wiki/RSA_(cryptosystem)>)

```
select 2 primes: p,q
n = p*q
phi(n) = (p-1)*(q-1)
select 1<e<phi(n), gcd(e,phi(n))=1
d=e^-1 mod phi(n)
(e,n) - public key
(d,n) - private key
c = m^e mod n
m = c^d mod n = m^(e*d) mod n = m^(e*d mod phi(n)) mod n = m
```

hi

#### [[⬆]](#toc) <a name='security'>Security:</a>

- What is _OpenID and OAuth2.0 and OpenID Connect_?
- Four main actors in an OAuth system (clients, resource owners, authorization servers, and protected resources)
- What is _access_token, refresh_token, SAML token, JWT token_?
- _Sticky session vs Session Replication_.
- What is hash [_salt_](<https://en.wikipedia.org/wiki/Salt_(cryptography)>)?
- What is _Federated Authentication_ ?
- What is _CSP_ and _SRI hash_ ?
- What is _Clickjacking_ and _Cursorjacking_ ? How to prevent it ?

#### [[⬆]](#toc) <a name='android'>Android:</a>

#### [[⬆]](#toc) <a name='books'>Books:</a>

##### C++ programming

- [The C++ Programming Language, 4th Edition](https://www.amazon.com/C-Programming-Language-4th/dp/0321563840)
- [Effective Modern C++: 42 Specific Ways to Improve Your Use of C++11 and C++14](https://www.amazon.com/Effective-Modern-Specific-Ways-Improve/dp/1491903996)

##### Java programming

- [Effective Java (3rd Edition)](https://www.amazon.com/Effective-Java-3rd-Joshua-Bloch/dp/0134685997)

##### Algorithms

- [Introduction to Algorithms, 3rd Edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844)
- [The Art of Computer Programming](https://www.amazon.co.uk/Art-Computer-Programming-Volumes-1-4a/dp/0321751043)
- [Network Flows: Theory, Algorithms, and Applications](https://www.amazon.com/Network-Flows-Theory-Algorithms-Applications/dp/013617549X)
- [Computational Geometry: Algorithms and Applications](https://www.amazon.com/Computational-Geometry-Applications-Mark-Berg/dp/3540779736)
- [Algorithms on Strings, Trees, and Sequences](https://www.amazon.com/Algorithms-Strings-Trees-Sequences-Computational/dp/0521585198)
- [Compilers: Principles, Techniques, and Tools](https://www.amazon.com/Compilers-Principles-Techniques-Tools-2nd/dp/0321486811)
- [How to Solve It: Modern Heuristics](https://www.amazon.com/How-Solve-Heuristics-Zbigniew-Michalewicz/dp/3540224947)
- [Scheduling Algorithms](https://www.amazon.com/Scheduling-Algorithms-Peter-Brucker/dp/354069515X)

##### Concurrent programming

- [Java Concurrency in Practice](https://www.amazon.com/Java-Concurrency-Practice-Brian-Goetz/dp/0321349601)
- [C++ Concurrency in Action, 2nd Edition](https://www.amazon.com/C-Concurrency-Action-Anthony-Williams/dp/1617294691)
- [The Art of Multiprocessor Programming](https://www.amazon.com/Art-Multiprocessor-Programming-Revised-Reprint/dp/0123973376)

##### Statistics

- [Introductory Statistics](https://www.amazon.com/Introductory-Statistics-10th-Neil-Weiss/dp/0321989171)
- [All of Statistics: A Concise Course in Statistical Inference](https://www.amazon.com/All-Statistics-Statistical-Inference-Springer/dp/1441923225)

##### Machine Learning

- [Applied Machine Learning](https://www.amazon.com/Applied-Machine-Learning-David-Forsyth/dp/3030181138)
- [Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems 2nd Edition](https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1492032646)
- [The Elements of Statistical Learning: Data Mining, Inference, and Prediction](https://web.stanford.edu/~hastie/Papers/ESLII.pdf)
- [Machine Learning: a Concise Introduction](https://www.amazon.com/Machine-Learning-Introduction-Probability-Statistics/dp/1119439191)
- [Learning From Data](https://www.amazon.com/Learning-Data-Yaser-S-Abu-Mostafa/dp/1600490069)

##### Digital Signal Processing

- [Digital Signal Processing: A Practical Approach, 2nd Edition](https://www.amazon.com/Digital-Signal-Processing-Practical-Approach/dp/0201596199)

##### Digital Image Processing

- [Digital Image Processing, 4th Edition](https://www.amazon.com/Digital-Image-Processing-Rafael-Gonzalez/dp/0133356728)
- [The Image Processing Handbook, 7th Edition](https://www.amazon.com/Image-Processing-Handbook-John-Russ/dp/1138747491)

##### Other

- [Reactive Programming with RxJava](https://www.amazon.com/Reactive-Programming-RxJava-Asynchronous-Applications/dp/1491931655)
- [Design Patterns: Elements of Reusable Object-Oriented Software](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612)
- [Big Data: Principles and best practices of scalable realtime data systems](https://www.amazon.com/Big-Data-Principles-practices-scalable/dp/1617290343)
- [Designing Data-Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321)
- [Kafka: The Definitive Guide](https://www.amazon.com/Kafka-Definitive-Real-Time-Stream-Processing/dp/1491936169)
- [Cassandra: The Definitive Guide](https://www.amazon.com/Cassandra-Definitive-Guide-Distributed-Scale/dp/1491933666)
- [The Linux Programming Interface](https://www.amazon.com/Linux-Programming-Interface-System-Handbook/dp/1593272200)
- [Hibernate in Action](https://www.amazon.com/Hibernate-Action-Christian-Bauer/dp/193239415X)
- [The Garbage Collection Handbook](https://www.amazon.com/Garbage-Collection-Handbook-Management-Algorithms/dp/1420082795)
- [Pro Git](https://git-scm.com/book/en/v2)
- [Learning JavaScript](https://www.amazon.com/Learning-JavaScript-Essentials-Application-Development/dp/1491914912)
- [Clean Code: A Handbook of Agile Software Craftsmanship](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [Release It!: Design and Deploy Production-Ready Software](https://www.amazon.com/Release-Design-Deploy-Production-Ready-Software/dp/1680502395)
- [Gödel, Escher, Bach: An Eternal Golden Braid](https://www.amazon.com/G%C3%B6del-Escher-Bach-Eternal-Golden/dp/0465026567)
