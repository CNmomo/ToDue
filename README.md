# ToDue

<h2>Component Structure</h2>

<pre>
App
├─store
│  └─screenSetterSlice        redux
│  -----------------------------------------
└─Root                        components
   ├─Splash
   └─Home
      │ ┌─Pool─────┐
      ├─┼─Today────┼─┐
      │ └─Schedule─┘ │
      │              ├─AppendTask
      │              ├─CreateTask
      │              └─EditTask
      └─Settings
</pre>
