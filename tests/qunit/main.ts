///<reference types="qunit"/>
/// <amd-dependency path="QUnit"/>

import ArrayTests from "./Arrays/_all";
import CollectionTests from "./Collections/_all";
import EnumerableTests from "./Linq/_all";
import UriTests from "./Uri";
import Integer from "./Integer";

Integer();
ArrayTests();
UriTests();
CollectionTests();
EnumerableTests();

QUnit.start();
