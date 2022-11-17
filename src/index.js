// import { map, reduce, filter } from "rxjs/operators";
// import { from } from "rxjs";

// const number$ = from([1, 2, 3, 4, 5, 6, 7, 8]).pipe(
//   map((Number) => Number * 3),
//   map((Number) => Number ** 3)

// );
// number$.subscribe(console.log)


// const numberReduce$ = from([1, 2, 3, 4, 5, 6, 7, 8]).pipe(
//   reduce((acc, val) => acc + val, 0)

// );

// numberReduce$.subscribe(console.log)


// const numberFilter$ = from([1, 2, 3, 4, 5, 6, 7, 8]).pipe(
//   filter(number => number >4)

// );

// numberFilter$.subscribe(console.log)


import { of } from "rxjs";
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

// const repeatNumbers$ = of(1, 2, 3, 4, 1, 2, 3, 2).pipe(
//   distinct()
// );

// repeatNumbers$.subscribe(console.log);

// const repeatNumbers$ = of(1, 2, 3, 3,  4, 3, 2, 2, 2, 3).pipe(
//    distinctUntilChanged()
//    );
//    repeatNumbers$.subscribe(console.log);



   // const repeatNumbers$ = of(
   //  {k:1},
   //  {k:2},
   //  {k:1},
   //  {k:3},
   //  {k:4},
   //  {k:4},
   //  {k:2},
   //  {k:1},

   // ).pipe(
   //  distinctUntilKeyChanged('k')
   //  );
   //  repeatNumbers$.subscribe(console.log);
 


   // import { fromEvent } from "rxjs";
   // import {
   //   debounceTime,
   //   throttleTime,
   //   auditTime,
   //   sampleTime,
   // } from "rxjs/operators";
   
   // const onClick$ = fromEvent(document, "click").pipe(
   //   // debounceTime(4000),
   //   // throttleTime(4000),
   //   // auditTime(4000),
   //   sampleTime(4000)
   // );
   
   // onClick$.subscribe(console.log);

// import { from, fromEvent, interval } from "rxjs";
// import { mergeWith, map, mergeAll, mergeMap } from "rxjs/operators";

// Aplicando mergeWith()
// const onClick$ = fromEvent(document, "click").pipe(map((event) => event.type));
// const onMouseMove$ = fromEvent(document, "mousemove").pipe(
//   map((event) => event.type)
// );

// onClick$.subscribe(console.log);
// onMouseMove$.subscribe(console.log);
// const eventDocument$ = onMouseMove$.pipe(mergeWith(onClick$));

// Aplicando mergeAll()
// const onClick$ = fromEvent(document, "click");
// const ordenSuperior$ = onClick$.pipe(map(() => interval(1000)));
// const primerOrden$ = ordenSuperior$.pipe(mergeAll());

// primerOrden$.subscribe(console.log);

// Aplicando mergeMap()


// const letras$ = from(["A", "B", "C"]);
// const resultado$ = letras$.pipe(
//   mergeMap((letter) => interval(1000).pipe(map((second) => letter + second)))
// );

// resultado$.subscribe(console.log);


// import { fromEvent } from "rxjs";
// import { pluck } from "rxjs/operators";

// fromEvent(document, "mousemove").pipe(pluck("clientX")).subscribe(console.log);
// pluck desfasado



// import { of, from } from "rxjs";
// import { startWith, endWith } from "rxjs/operators";

// // const letters$ = of("A", "B", "C", "D").pipe(startWith("Z"));
// const letters$ = of("A", "B", "C", "D").pipe(endWith("Z"));
// letters$.subscribe(console.log);

import { of, catchError, map, retry } from "rxjs";

// const letters$ = of("A", "B", "C", "D", "E").pipe(
//   map((letter) => {
//     if (letter === "D") {
//       x = 4;
//     }
//     return letter;
//   }),
//   retry(2),
//   catchError((error) => of(error.message))
// );

// letters$.subscribe(console.log);


import { ajax } from "rxjs/ajax";
import { of, map, catchError } from "rxjs";

// const ditto$ = ajax("https://pokeapi.co/api/v2/pokemon/ditto").pipe(
//   map((data) => console.log(data.response)),
//   catchError((error) => {
//     console.log("Error: ", error.message);
//     return of(error);
//   })
// );

// ditto$.subscribe(console.log);

// https://pokeapi.co/api/v2/pokemon/ditto

const postRequest$ = ajax({
  url: "https://httpbin.org/delay/5",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    message: "¿Dónde está Ditto?",
  },
}).pipe(
  map((response) => {
    console.log(response);
    return response;
  }),
  catchError((error) => {
    console.log("Error: ", error.message);
    return of(error);
  })
);

postRequest$.subscribe(console.log);