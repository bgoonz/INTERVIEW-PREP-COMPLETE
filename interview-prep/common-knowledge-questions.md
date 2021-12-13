---
cover: ../.gitbook/assets/green-spruce.png
coverY: 311.0943396226415
---

# Common Knowledge Questions

### Interpreted language vs compiled language

Interpreted languages don’t run at the machine code level. They are interpreted by another program that executes the instructions. Sometimes interpreted programs are compiled to _bytecode_ and the bytecode is what is interpreted, which allows the programs to be smaller and run more quickly.

Compiled languages are converted to machine code to execute directly on the CPU. This makes them typically much faster than interpreted programs.

_\[Technically any language could be compiled or interpreted, but there are some languages that typically get compiled (Go, C, C++, etc.) and some that typically get interpreted (Java, Python, JavaScript, etc.)]_

![](../.gitbook/assets/chrome_HV3eZo0edG.png)

\_\_

### Stack vs heap

_\[This specific question, “stack vs. heap” is about where a language allocates memory for different types of objects. It’s not directly about the stack data structure or heap data structure.]_

When a program executes, the stack is used to hold local variables and function arguments. When a function gets called, a new stack frame is allocated on top of the stack with just enough room to hold all the local variables and arguments to the function. When the function returns, its stack frame is popped from the stack and the variables are forgotten. (Which is OK, because they were only needed for as long as the function was active.)

The heap is used for longer-term storage. Objects that were allocated with new or dynamically allocated another way go on the heap. Constant strings and global variables go there, as well.

![](../.gitbook/assets/chrome_HV3eZo0edG.png)

### Recursion

Recursion is when a function calls itself.

It typically keeps calling itself until a _base case_ is met that causes it to no longer call itself. (i.e. when the work is done.)

Problems that are composed of identical independent subproblems are good candidates for recursive solutions. (e.g a binary search tree is made up of smaller binary search trees, so traversing them has a nice recursive solution.)

### Object oriented design

- [https://en.wikipedia.org/wiki/Object-oriented_design](https://en.wikipedia.org/wiki/Object-oriented_design)

### Design patterns (singleton, factory)

- [https://en.wikipedia.org/wiki/Singleton_pattern](https://en.wikipedia.org/wiki/Singleton_pattern)

In [software engineering](https://en.wikipedia.org/wiki/Software_engineering), the **singleton pattern** is a [software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern) that restricts the [instantiation](<https://en.wikipedia.org/wiki/Instantiation_(computer_science)>) of a [class](<https://en.wikipedia.org/wiki/Class_(computer_programming)>) to one "single" instance. This is useful when exactly one object is needed to coordinate actions across the system.

The term comes from the [mathematical concept of a singleton](<https://en.wikipedia.org/wiki/Singleton_(mathematics)>).

The singleton design pattern is one of the twenty-three well-known ["Gang of Four" design patterns](https://en.wikipedia.org/wiki/Design_Patterns) that describe how to solve recurring design problems to design flexible and reusable [object-oriented software](https://en.wikipedia.org/wiki/Object-oriented_programming) with the aim of making it easier to implement, change, test, and reuse objects.[\[1\]](https://en.wikipedia.org/wiki/Singleton_pattern#cite_note-GoF-1)

The singleton design pattern solves problems by allowing it to:[\[2\]](https://en.wikipedia.org/wiki/Singleton_pattern#cite_note-2)

- Ensure that a class only has one instance
- Easily access the sole instance of a class
- Control its instantiation
- Restrict the number of instances
- Access a [global variable](https://en.wikipedia.org/wiki/Global_variable)

The singleton design pattern describes how to solve such problems:

- Hide the [constructors](<https://en.wikipedia.org/wiki/Constructor_(object-oriented_programming)>) of the [class](<https://en.wikipedia.org/wiki/Class_(computer_programming)>).
- Define a public static operation (`getInstance()`) that returns the sole instance of the class.

In essence, the singleton pattern forces it to be responsible for ensuring that it is only instantiated once. A hidden constructor—declared `private` or `protected`—ensures that the class can never be instantiated from outside the class. The public static operation can be accessed by using the class name and operation name, e.g., `Singleton.getInstance()`.

### Common uses\[[edit](https://en.wikipedia.org/w/index.php?title=Singleton_pattern&action=edit&section=2)]

- The [abstract factory](https://en.wikipedia.org/wiki/Abstract_factory_pattern), [factory method](https://en.wikipedia.org/wiki/Factory_method_pattern), [builder](https://en.wikipedia.org/wiki/Builder_pattern), and [prototype](https://en.wikipedia.org/wiki/Prototype_pattern) patterns can use singletons.
- [Facade](https://en.wikipedia.org/wiki/Facade_pattern) objects are often singletons because only one facade object is required.
- [State objects](https://en.wikipedia.org/wiki/State_pattern) are often singletons.
- Singletons are often preferred to [global variables](https://en.wikipedia.org/wiki/Global_variables) because:[\[3\]](https://en.wikipedia.org/wiki/Singleton_pattern#cite_note-devin-3)
  - They do not pollute the global [namespace](https://en.wikipedia.org/wiki/Namespace) (or, in languages with nested namespaces, their containing namespace) with unnecessary variables.[\[1\]](https://en.wikipedia.org/wiki/Singleton_pattern#cite_note-GoF-1)
  - They permit [lazy](https://en.wikipedia.org/wiki/Lazy_evaluation) allocation and initialization, whereas [global variables](https://en.wikipedia.org/wiki/Global_variables) in many languages will always consume resources.

[Logging](https://en.wikipedia.org/wiki/Log_file) is a classic example of a singleton.[\[4\]](https://en.wikipedia.org/wiki/Singleton_pattern#cite_note-rainsberger-4)

```python
class Singleton:
    __instance = None

    def __new__(cls, *args):
        if cls.__instance is None:
            cls.__instance = object.__new__(cls, *args)
        return cls.__instance
```

- [https://en.wikipedia.org/wiki/Factory\_(object-oriented_programming)](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)>)

![](../.gitbook/assets/chrome_HV3eZo0edG.png)

## Factory (object-oriented programming) <a href="#firstheading" id="firstheading"></a>

From Wikipedia, the free encyclopedia[Jump to navigation](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#mw-head>)[Jump to search](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#searchInput>)"Factory pattern" redirects here. For the GoF design patterns using factories, see [factory method pattern](https://en.wikipedia.org/wiki/Factory_method_pattern) and [abstract factory pattern](https://en.wikipedia.org/wiki/Abstract_factory_pattern).[![](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Factory_Method_pattern_in_LePUS3.png/300px-Factory_Method_pattern_in_LePUS3.png)](https://en.wikipedia.org/wiki/File:Factory_Method_pattern_in_LePUS3.png)Factory Method in [LePUS3](https://en.wikipedia.org/wiki/LePUS3)

In [object-oriented programming (OOP)](https://en.wikipedia.org/wiki/Object-oriented_programming), a **factory** is an [object](<https://en.wikipedia.org/wiki/Object_(computer_science)>) for [creating other objects](https://en.wikipedia.org/wiki/Object_creation) – formally a factory is a function or method that returns objects of a varying prototype or class[\[1\]](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#cite_note-1>) from some method call, which is assumed to be "new".[\[a\]](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#cite_note-2>) More broadly, a [subroutine](https://en.wikipedia.org/wiki/Subroutine) that returns a "new" object may be referred to as a "factory", as in _factory method_ or _factory function_. This is a basic concept in OOP, and forms the basis for a number of related [software design patterns](https://en.wikipedia.org/wiki/Software_design_pattern).

### Contents <a href="#mw-toc-heading" id="mw-toc-heading"></a>

- [1Motivation](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#Motivation>)
- [2Terminology](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#Terminology>)
- [3Use](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#Use>)
  - [3.1Object creation](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#Object_creation>)
- [4Examples](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#Examples>)
- [5Syntax](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#Syntax>)
- [6Semantics](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#Semantics>)
- [7Design patterns](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#Design_patterns>)
- [8Applications](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#Applications>)
- [9Applicability](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#Applicability>)
- [10Benefits and variants](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#Benefits_and_variants>)
  - [10.1Descriptive names](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#Descriptive_names>)
  - [10.2Encapsulation](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#Encapsulation>)
    - [10.2.1Java](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#Java>)
    - [10.2.2PHP](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#PHP>)
- [11Limitations](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#Limitations>)
- [12Notes](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#Notes>)
- [13References](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#References>)

### Motivation\[[edit](<https://en.wikipedia.org/w/index.php?title=Factory_(object-oriented_programming)&action=edit&section=1>)]

In [class-based programming](https://en.wikipedia.org/wiki/Class-based_programming), a factory is an [abstraction](<https://en.wikipedia.org/wiki/Abstraction_(computer_science)>) of a [constructor](<https://en.wikipedia.org/wiki/Constructor_(object-oriented_programming)>) of a class, while in [prototype-based programming](https://en.wikipedia.org/wiki/Prototype-based_programming) a factory is an abstraction of a prototype object. A constructor is concrete in that it creates objects as instances of a single class, and by a specified process (class instantiation), while a factory can create objects by instantiating various classes, or by using other allocation schemes such as an [object pool](https://en.wikipedia.org/wiki/Object_pool). A prototype object is concrete in that it is used to create objects by being [cloned](<https://en.wikipedia.org/wiki/Cloning_(programming)>), while a factory can create objects by cloning various prototypes, or by other allocation schemes.

A factory may be implemented in various ways. Most often it is implemented as a method, in which case it is called a [_factory method_](https://en.wikipedia.org/wiki/Factory_method). Sometimes it is implemented as a function, in which case it is called a _factory function_. In some languages, constructors are themselves factories. However, in most languages they are not, and constructors are invoked in a way that is idiomatic to the language, such as by using the keyword `new`, while a factory has no special status and is invoked via an ordinary method call or function call. In these languages, a factory is an abstraction of a constructor, but not strictly a generalization, as constructors are not themselves factories.

### Terminology\[[edit](<https://en.wikipedia.org/w/index.php?title=Factory_(object-oriented_programming)&action=edit&section=2>)]

Terminology differs as to whether the concept of a factory is itself a design pattern – in [_Design Patterns_](https://en.wikipedia.org/wiki/Design_Patterns) there is no "factory pattern", but instead two patterns ([factory method pattern](https://en.wikipedia.org/wiki/Factory_method_pattern) and [abstract factory pattern](https://en.wikipedia.org/wiki/Abstract_factory_pattern)) that use factories. Some sources refer to the concept as the **factory pattern**,[\[2\]](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#cite_note-oodesign-3>)[\[3\]](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#cite_note-4>) while others consider the concept itself a [programming idiom](https://en.wikipedia.org/wiki/Programming_idiom),[\[4\]](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#cite_note-headfirst-5>) reserving the term "factory pattern" or "factory patterns" to more complicated patterns that use factories, most often the factory method pattern; in this context, the concept of a factory itself may be referred to as a **simple factory.**[\[4\]](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#cite_note-headfirst-5>) In other contexts, particularly the Python language, "factory" itself is used, as in this article.[\[5\]](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#cite_note-6>) More broadly, "factory" may be applied not just to an object that returns objects from some method call, but to a [_subroutine_](https://en.wikipedia.org/wiki/Subroutine) that returns objects, as in a _factory function_ (even if functions are not objects) or _factory method._[\[6\]](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#cite_note-7>) Because in many languages factories are invoked by calling a method, the general concept of a factory is often confused with the specific [factory method pattern](https://en.wikipedia.org/wiki/Factory_method_pattern) design pattern.

### Use\[[edit](<https://en.wikipedia.org/w/index.php?title=Factory_(object-oriented_programming)&action=edit&section=3>)]

OOP provides [polymorphism](<https://en.wikipedia.org/wiki/Polymorphism_(computer_science)>) on object _use_ by [method dispatch](https://en.wikipedia.org/wiki/Method_dispatch), formally [subtype polymorphism](https://en.wikipedia.org/wiki/Subtype_polymorphism) via [single dispatch](https://en.wikipedia.org/wiki/Single_dispatch) determined by the type of the object on which the method is called. However, this does not work for constructors, as constructors _create_ an object of some type, rather than _use_ an existing object. More concretely, when a constructor is called, there is no object yet on which to dispatch.[\[b\]](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#cite_note-8>)

Using factories instead of constructors or prototypes allows one to use polymorphism for object creation, not only object use. Specifically, using factories provides [encapsulation](<https://en.wikipedia.org/wiki/Encapsulation_(object-oriented_programming)>), and means the code is not tied to specific classes or objects, and thus the class hierarchy or prototypes can be changed or [refactored](https://en.wikipedia.org/wiki/Refactored) without needing to change code that uses them – they abstract from the class hierarchy or prototypes.

More technically, in languages where factories generalize constructors, factories can usually be used anywhere constructors can be,[\[c\]](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#cite_note-9>) meaning that interfaces that accept a constructor can also in general accept a factory – usually one only need something that creates an object, rather than needing to specify a class and instantiation.

For example, in Python, the `collections.defaultdict` class[\[7\]](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#cite_note-10>) has a constructor which creates an object of type `defaultdict`[\[d\]](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#cite_note-11>) whose default values are produced by invoking a factory. The factory is passed as an argument to the constructor, and can itself be a constructor, or any thing that behaves like a constructor – a [callable object](https://en.wikipedia.org/wiki/Callable_object) that returns an object, i.e., a factory. For example, using the `list` constructor for lists:

```
# collections.defaultdict([default_factory[, ...]])
d = defaultdict(list)
```

#### Object creation\[[edit](<https://en.wikipedia.org/w/index.php?title=Factory_(object-oriented_programming)&action=edit&section=4>)]

Factory objects are used in situations where getting hold of an object of a particular kind is a more complex process than simply creating a new object, notably if complex allocation or initialization is desired. Some of the processes required in the creation of an object include determining which object to create, managing the lifetime of the object, and managing specialized build-up and tear-down concerns of the object. The factory object might decide to create the object's [class](<https://en.wikipedia.org/wiki/Class_(computer_science)>) (if applicable) dynamically, return it from an [object pool](https://en.wikipedia.org/wiki/Object_pool), do complex configuration on the object, or other things. Similarly, using this definition, a [singleton](<https://en.wikipedia.org/wiki/Singleton_(mathematics)>) implemented by the [singleton pattern](https://en.wikipedia.org/wiki/Singleton_pattern) is a formal factory – it returns an object, but does not create new objects beyond the single instance.

### Examples\[[edit](<https://en.wikipedia.org/w/index.php?title=Factory_(object-oriented_programming)&action=edit&section=5>)]

The simplest example of a factory is a simple factory function, which just invokes a constructor and returns the result. In Python, a factory function `f` that instantiates a class `A` can be implemented as:

```
def f():
    return A()
```

A simple factory function implementing the singleton pattern is:

```
def f():
    if f.obj is None:
        f.obj = A()
    return f.obj

f.obj = None
```

This will create an object when first called, and always return the same object thereafter.

### Syntax\[[edit](<https://en.wikipedia.org/w/index.php?title=Factory_(object-oriented_programming)&action=edit&section=6>)]

Factories may be invoked in various ways, most often a method call (a _factory method_), sometimes by being called as a function if the factory is a callable object (a _factory function_). In some languages constructors and factories have identical syntax, while in others constructors have special syntax. In languages where constructors and factories have identical syntax, like Python, Perl, Ruby, Object Pascal, and F#,[\[e\]](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#cite_note-12>) constructors can be transparently replaced by factories. In languages where they differ, one must distinguish them in interfaces, and switching between constructors and factories requires changing the calls.

### Semantics\[[edit](<https://en.wikipedia.org/w/index.php?title=Factory_(object-oriented_programming)&action=edit&section=7>)]

In languages where objects are [dynamically allocated](https://en.wikipedia.org/wiki/Dynamic_memory_allocation), as in Java or Python, factories are semantically equivalent to constructors. However, in languages such as C++ that allow some objects to be statically allocated, factories are different from constructors for statically allocated classes, as the latter can have memory allocation determined at compile time, while allocation of the return values of factories must be determined at run time. If a constructor can be passed as an argument to a function, then invocation of the constructor and allocation of the return value must be done dynamically at run time, and thus have similar or identical semantics to invoking a factory.

### Design patterns\[[edit](<https://en.wikipedia.org/w/index.php?title=Factory_(object-oriented_programming)&action=edit&section=8>)]

Main article: [Creational pattern](https://en.wikipedia.org/wiki/Creational_pattern)

Factories are used in various [design patterns](<https://en.wikipedia.org/wiki/Design_pattern_(computer_science)>), specifically in [creational patterns](https://en.wikipedia.org/wiki/Creational_pattern) such as the [Design pattern object library](https://en.wikipedia.org/w/index.php?title=Design_pattern_object_library&action=edit&redlink=1). Specific recipes have been developed to implement them in many languages. For example, several "[GoF patterns](<https://en.wikipedia.org/wiki/Design_Patterns_(book)>)", like the "[Factory method pattern](https://en.wikipedia.org/wiki/Factory_method_pattern)", the "[Builder](https://en.wikipedia.org/wiki/Builder_pattern)" or even the "[Singleton](https://en.wikipedia.org/wiki/Singleton_pattern)" are implementations of this concept. The "[Abstract factory pattern](https://en.wikipedia.org/wiki/Abstract_factory_pattern)" instead is a method to build collections of factories.

In some design patterns, a factory object has a [method](<https://en.wikipedia.org/wiki/Method_(computer_science)>) for every kind of object it is capable of creating. These methods optionally accept [parameters](https://en.wikipedia.org/wiki/Parameter) defining how the object is created, and then return the created object.

### Applications\[[edit](<https://en.wikipedia.org/w/index.php?title=Factory_(object-oriented_programming)&action=edit&section=9>)]

Factory objects are common in [toolkits](https://en.wikipedia.org/wiki/Toolkit) and [frameworks](https://en.wikipedia.org/wiki/Software_framework) where library code needs to create objects of types which may be subclassed by applications using the framework. They are also used in [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development) to allow classes to be put under test.[\[8\]](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#cite_note-13>)

Factories determine the actual _concrete_ type of [object](<https://en.wikipedia.org/wiki/Object_(computer_science)>) to be created, and it is here that the object is actually created. As the factory only returns an abstract interface to the object, the client code does not know – and is not burdened by – the actual concrete type of the object which was just created. However, the type of a concrete object is known by the abstract factory. In particular, this means:

- The client code has no knowledge whatsoever of the concrete [type](https://en.wikipedia.org/wiki/Data_type), not needing to include any [header files](https://en.wikipedia.org/wiki/Header_file) or [class](<https://en.wikipedia.org/wiki/Class_(computer_science)>) [declarations](<https://en.wikipedia.org/wiki/Declaration_(computer_science)>) relating to the concrete type. The client code deals only with the abstract type. Objects of a concrete type are indeed created by the factory, but the client code accesses such objects only through their [abstract interface](https://en.wikipedia.org/wiki/Abstract_interface).
- Adding new concrete types is done by modifying the client code to use a different factory, a modification which is typically one line in one file. This is significantly easier than modifying the client code to instantiate a new type, which would require changing _every_ location in the code where a new object is created.

### Applicability\[[edit](<https://en.wikipedia.org/w/index.php?title=Factory_(object-oriented_programming)&action=edit&section=10>)]

Factories can be used when:

1. The creation of an object makes reuse impossible without significant duplication of code.
2. The creation of an object requires access to information or resources that should not be contained within the composing class.
3. The lifetime management of the generated objects must be centralized to ensure a consistent behavior within the application.

Factories, specifically factory methods, are common in [toolkits](https://en.wikipedia.org/wiki/Toolkit) and [frameworks](https://en.wikipedia.org/wiki/Software_framework), where library code needs to create objects of types that may be subclassed by applications using the framework.

Parallel class hierarchies often require objects from one hierarchy to be able to create appropriate objects from another.

Factory methods are used in [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development) to allow classes to be put under test.[\[9\]](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)#cite_note-14>) If such a class `Foo` creates another object `Dangerous` that can't be put under automated [unit tests](https://en.wikipedia.org/wiki/Unit_test) (perhaps it communicates with a production database that isn't always available), then the creation of `Dangerous` objects is placed in the [virtual](https://en.wikipedia.org/wiki/Virtual_function) factory method `createDangerous` in class `Foo`. For testing, `TestFoo` (a subclass of `Foo`) is then created, with the virtual factory method `createDangerous` overridden to create and return `FakeDangerous`, a [fake object](https://en.wikipedia.org/wiki/Fake_object). Unit tests then use `TestFoo` to test the functionality of `Foo` without incurring the side effect of using a real `Dangerous` object.

### S.O.L.I.D. principles

- [https://en.wikipedia.org/wiki/SOLID\_(object-oriented_design)](<https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)>)

### Web Developer Job Interview Questions

#### 1. DESCRIBE A WEB DEVELOPMENT PROJECT YOU WORKED ON FROM START TO FINISH. WHAT APPROACH DID YOU TAKE, WHAT CHALLENGES DID YOU FACE, AND HOW WERE YOU SUCCESSFUL?

**Tip:** Be transparent about what a real web development project looks like for you. Highlight your wins, of course, but don’t shy away from being real about the challenges. Interviewers aren’t looking to hear that you never have setbacks (that’s not realistic). They want to hear how you get past setbacks and ultimately succeed.

#### 2. DESCRIBE A PROJECT THAT WENT OFF THE RAILS. WHY DID IT GO WRONG AND HOW DID YOU REACT?

**Tip:** Similar to the last question, interviewers are looking for honesty here. Sometimes projects go badly, and that’s OK. What’s important is how you respond to failures and learn from them so they don’t happen next time.

#### 3. WHICH PROGRAMMING LANGUAGES ARE YOU PROFICIENT IN? ARE THERE ANY LANGUAGES YOU’RE NOT FAMILIAR WITH THAT YOU FEEL LIKE YOU NEED TO LEARN?

**Tip:** This question is pretty straightforward—let the interviewer know which languages you’re familiar with and how you use them. Ideally, you’ve scoped out the job beforehand and know that your experience syncs with what the employer needs. At the same time, have some new languages in mind that you’d like to learn. This highlights your willingness to keep growing professionally.

#### 4. WHY ARE YOU DRAWN TO WEB DEVELOPMENT?

**Tip:** It’s a common pitfall to interview for a job and never explicitly say WHY you want to work in this specific field or for this particular employer/company. Even if the question doesn’t get asked, find a way to touch on it during the interview.

#### 5. WHAT KIND OF TEAM ENVIRONMENT DO YOU THRIVE IN?

**Tip:** You may be tempted to say whatever you think the interviewer is looking for, but it’s way better to be honest. If the team you’ll be working with has a work style that’s completely outside of your comfort zone, then this particular job might not be a good fit for you. That being said, most development teams are dynamic and flexible, and if your employer knows what kind of environment suits you best, they can help find a spot on the team that WILL work for you.

#### 6. HOW DO YOU KEEP ON TOP OF INDUSTRY NEWS AND TRENDS, AND HOW DO YOU APPLY THIS TO YOUR WORK?

**Tip:** You DO keep up with industry news, don’t you? If so, simply rattle off your list of favorite news sources and why they’re effective for keeping you in the know. And if tech news is something you’ve overlooked while being in the weeds of learning tech skills, take a few minutes to find a few suitable news blogs and tech Twitter accounts to put in your hip pocket (and be ready to bust them out at your next interview).

#### 7. HOW DO YOU COMMUNICATE YOUR PROGRESS TO CLIENTS AND/OR STAKEHOLDERS?

**Tip:** The gist here is to demonstrate that you understand the importance of keeping clients and stakeholders up to date, and that you have ideas for establishing systems of communication (or that you’re willing to work with systems like Agile or Scrum if they’re used by your employer).

#### 8. WHAT DO YOU DO IF A CLIENT OR STAKEHOLDER IS UNHAPPY WITH A PROJECT?

**Tip:** Having an effective communication strategy with stakeholders doesn’t mean you won’t sometimes receive negative feedback. So how do you respond? Do you get defensive? Shut down? Give up? Or do you find creative ways to accept that feedback and address client or shareholder concerns? Interviewers are looking for candidates who can adapt to and recover from hard times, so either think of a real example that you can share, or develop a client appeasement gameplan that you’ll use when the time comes.

#### 9. GIVE ME AN EXAMPLE OF HOW YOU’D DESCRIBE WEB DEVELOPMENT (WHAT IT IS, WHY IT IS IMPORTANT) TO SOMEONE WHO IS COMPLETELY NEW TO TECH.

**Tip**: As a web developer you’ll find yourself in situations where you need to talk “tech” with non-techies. Making your work make sense to people who have no idea what it is you actually do is a valuable skill. Take off your developer hat for a day and think of some ways to describe web development to someone who doesn’t know Java from JavaScript.

#### 10. GIVE AN EXAMPLE OF A WEBSITE OR WEB APPLICATION THAT YOU DON’T LIKE, POINT OUT WHAT’S WRONG WITH IT AND WHAT YOU WOULD CHANGE.

**Tip:** Interviewers may ask you to provide an example of a website you think is less than stellar, then ask you to describe what you think is lacking and what you’d do to improve it. It’s a good idea to have examples and explanations on hand (as well as examples of sites you think are super effective) going into an interview. Answering this question comprehensively shows interviewers that you aren’t signing on to mindlessly write code—you understand what makes good sites good and how to make bad sites better.

#### 11. WHAT KIND OF MANAGEMENT STYLE DO YOU RESPOND TO BEST?

**Tip:** This question is another one where you might be tempted to make the interviewer happy. But you know what’s guaranteed to make YOU unhappy? Working for a manager whose style you can’t stand. Be as flexible and as open minded as you can when describing your preferred management style, but if there’s something that’s a complete deal-breaker for you (or that you particularly appreciate), don’t be shy about making it known.

#### 12. HOW WOULD YOU DESCRIBE THE ROLE OF A WEB DEVELOPER? WHAT ARE THE MOST IMPORTANT ASPECTS OF THE JOB AND WHY?

**Tip:** Your clear and concise summary of a web developer role shows how you think about the web development process in general, and lets interviewers know what specific developer strengths and interests you bring to the job.

#### 13. HOW DO YOU MANAGE YOUR TIME DURING A DEVELOPMENT CYCLE, AND WHAT METHODS DO YOU USE FOR ESTIMATING HOW LONG SPECIFIC DEVELOPMENT TASKS WILL TAKE?

**Tip:** Managing your time and estimating how long individual tasks will take is critical to your success as a web developer. If you’re already good at time management and estimation, revisit what works for you and build on it ahead of this question. And if your current time management approach isn’t working? Now’s a great time to implement a new system and get the most out of your work day.

#### 14. WHAT SOFT SKILLS WILL YOU BRING TO THE JOB, AND HOW DO YOU ENVISION USING THEM?

**Tip:** Soft skills can be a difference maker. If it’s a choice between a skilled programmer and a skilled programmer who can write well or who has experience with project management, most employers will pick the latter. So have a list of your own soft skills ready, but also have examples of how they’ll be relevant to a web developer job. It’s not enough to say you’re good at written and verbal communication. You need to explain how your excellent written and verbal communication skills will help you relay project details to team members and stakeholders.

#### 15. GIVE AN EXAMPLE OF A NON-CODING/WEB DEVELOPMENT PROBLEM THAT YOU’VE SOLVED, AND WHAT YOUR PROBLEM SOLVING PROCESS INVOLVED.

**Tip:** Yes, you’re interviewing for a web developer job, but remember to look to other experiences in your life for inspiration. Examples like the time you helped improve the ordering system at the cafe you worked at or put together a volunteer fundraising effort to save the music program at your kids’ school all speak to the breadth of your problem solving abilities and experiences.

### Web Developer Job Interview Questions

#### 1. DESCRIBE A WEB DEVELOPMENT PROJECT YOU WORKED ON FROM START TO FINISH. WHAT APPROACH DID YOU TAKE, WHAT CHALLENGES DID YOU FACE, AND HOW WERE YOU SUCCESSFUL?

**Tip:** Be transparent about what a real web development project looks like for you. Highlight your wins, of course, but don’t shy away from being real about the challenges. Interviewers aren’t looking to hear that you never have setbacks (that’s not realistic). They want to hear how you get past setbacks and ultimately succeed.

#### 2. DESCRIBE A PROJECT THAT WENT OFF THE RAILS. WHY DID IT GO WRONG AND HOW DID YOU REACT?

**Tip:** Similar to the last question, interviewers are looking for honesty here. Sometimes projects go badly, and that’s OK. What’s important is how you respond to failures and learn from them so they don’t happen next time.

#### 3. WHICH PROGRAMMING LANGUAGES ARE YOU PROFICIENT IN? ARE THERE ANY LANGUAGES YOU’RE NOT FAMILIAR WITH THAT YOU FEEL LIKE YOU NEED TO LEARN?

**Tip:** This question is pretty straightforward—let the interviewer know which languages you’re familiar with and how you use them. Ideally, you’ve scoped out the job beforehand and know that your experience syncs with what the employer needs. At the same time, have some new languages in mind that you’d like to learn. This highlights your willingness to keep growing professionally.

#### 4. WHY ARE YOU DRAWN TO WEB DEVELOPMENT?

**Tip:** It’s a common pitfall to interview for a job and never explicitly say WHY you want to work in this specific field or for this particular employer/company. Even if the question doesn’t get asked, find a way to touch on it during the interview.

#### 5. WHAT KIND OF TEAM ENVIRONMENT DO YOU THRIVE IN?

**Tip:** You may be tempted to say whatever you think the interviewer is looking for, but it’s way better to be honest. If the team you’ll be working with has a work style that’s completely outside of your comfort zone, then this particular job might not be a good fit for you. That being said, most development teams are dynamic and flexible, and if your employer knows what kind of environment suits you best, they can help find a spot on the team that WILL work for you.

#### 6. HOW DO YOU KEEP ON TOP OF INDUSTRY NEWS AND TRENDS, AND HOW DO YOU APPLY THIS TO YOUR WORK?

**Tip:** You DO keep up with industry news, don’t you? If so, simply rattle off your list of favorite news sources and why they’re effective for keeping you in the know. And if tech news is something you’ve overlooked while being in the weeds of learning tech skills, take a few minutes to find a few suitable news blogs and tech Twitter accounts to put in your hip pocket (and be ready to bust them out at your next interview).

#### 7. HOW DO YOU COMMUNICATE YOUR PROGRESS TO CLIENTS AND/OR STAKEHOLDERS?

**Tip:** The gist here is to demonstrate that you understand the importance of keeping clients and stakeholders up to date, and that you have ideas for establishing systems of communication (or that you’re willing to work with systems like Agile or Scrum if they’re used by your employer).

#### 8. WHAT DO YOU DO IF A CLIENT OR STAKEHOLDER IS UNHAPPY WITH A PROJECT?

**Tip:** Having an effective communication strategy with stakeholders doesn’t mean you won’t sometimes receive negative feedback. So how do you respond? Do you get defensive? Shut down? Give up? Or do you find creative ways to accept that feedback and address client or shareholder concerns? Interviewers are looking for candidates who can adapt to and recover from hard times, so either think of a real example that you can share, or develop a client appeasement gameplan that you’ll use when the time comes.

#### 9. GIVE ME AN EXAMPLE OF HOW YOU’D DESCRIBE WEB DEVELOPMENT (WHAT IT IS, WHY IT IS IMPORTANT) TO SOMEONE WHO IS COMPLETELY NEW TO TECH.

**Tip**: As a web developer you’ll find yourself in situations where you need to talk “tech” with non-techies. Making your work make sense to people who have no idea what it is you actually do is a valuable skill. Take off your developer hat for a day and think of some ways to describe web development to someone who doesn’t know Java from JavaScript.

#### 10. GIVE AN EXAMPLE OF A WEBSITE OR WEB APPLICATION THAT YOU DON’T LIKE, POINT OUT WHAT’S WRONG WITH IT AND WHAT YOU WOULD CHANGE.

**Tip:** Interviewers may ask you to provide an example of a website you think is less than stellar, then ask you to describe what you think is lacking and what you’d do to improve it. It’s a good idea to have examples and explanations on hand (as well as examples of sites you think are super effective) going into an interview. Answering this question comprehensively shows interviewers that you aren’t signing on to mindlessly write code—you understand what makes good sites good and how to make bad sites better.

#### 11. WHAT KIND OF MANAGEMENT STYLE DO YOU RESPOND TO BEST?

**Tip:** This question is another one where you might be tempted to make the interviewer happy. But you know what’s guaranteed to make YOU unhappy? Working for a manager whose style you can’t stand. Be as flexible and as open minded as you can when describing your preferred management style, but if there’s something that’s a complete deal-breaker for you (or that you particularly appreciate), don’t be shy about making it known.

#### 12. HOW WOULD YOU DESCRIBE THE ROLE OF A WEB DEVELOPER? WHAT ARE THE MOST IMPORTANT ASPECTS OF THE JOB AND WHY?

**Tip:** Your clear and concise summary of a web developer role shows how you think about the web development process in general, and lets interviewers know what specific developer strengths and interests you bring to the job.

#### 13. HOW DO YOU MANAGE YOUR TIME DURING A DEVELOPMENT CYCLE, AND WHAT METHODS DO YOU USE FOR ESTIMATING HOW LONG SPECIFIC DEVELOPMENT TASKS WILL TAKE?

**Tip:** Managing your time and estimating how long individual tasks will take is critical to your success as a web developer. If you’re already good at time management and estimation, revisit what works for you and build on it ahead of this question. And if your current time management approach isn’t working? Now’s a great time to implement a new system and get the most out of your work day.

#### 14. WHAT SOFT SKILLS WILL YOU BRING TO THE JOB, AND HOW DO YOU ENVISION USING THEM?

**Tip:** Soft skills can be a difference maker. If it’s a choice between a skilled programmer and a skilled programmer who can write well or who has experience with project management, most employers will pick the latter. So have a list of your own soft skills ready, but also have examples of how they’ll be relevant to a web developer job. It’s not enough to say you’re good at written and verbal communication. You need to explain how your excellent written and verbal communication skills will help you relay project details to team members and stakeholders.

#### 15. GIVE AN EXAMPLE OF A NON-CODING/WEB DEVELOPMENT PROBLEM THAT YOU’VE SOLVED, AND WHAT YOUR PROBLEM SOLVING PROCESS INVOLVED.

**Tip:** Yes, you’re interviewing for a web developer job, but remember to look to other experiences in your life for inspiration. Examples like the time you helped improve the ordering system at the cafe you worked at or put together a volunteer fundraising effort to save the music program at your kids’ school all speak to the breadth of your problem solving abilities and experiences.
