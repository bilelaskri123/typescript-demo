// utility types

type Post = {
  title: string;
  category: string;
  description: string;
  likes: number;
};

// Omit Type
// Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).
// The opposite of Pick.

const post1: Omit<Post, "category" | "likes"> = {
  title: "post1",
  description: "about post1",
};

// Pick Type
// Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type
const post2: Pick<Post, "category" | "likes"> = {
  category: "post2",
  likes: 25,
};

// Partial Type
// Constructs a type with all properties of Type set to optional.
// This utility will return a type that represents all subsets of a given type.
const post3: Partial<Post> = {
  title: "post3",
  likes: 56,
};

// how to implement Partial type using keyof operator and type mapping
type OptionalType<T> = {
  [key in keyof T]?: T[key];
};

const post4: OptionalType<Post> = {
  title: "post4",
  category: "post4 category",
};
