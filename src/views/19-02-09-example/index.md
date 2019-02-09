Lorem ipsum dolor sit amet, pri velit fuisset mediocrem no, ut summo virtute eligendi his. Ex quas doming atomorum pro, at aliquam albucius vis. Doming disputationi ne vis. Mei aperiri accumsan ad.

Tota commune patrioque ex sed, in soleat fabellas persecuti eum. Democritum omittantur ex pro. Ad elit aliquip rationibus nec. Eos fierent antiopam definitiones ad, patrioque interpretaris eum ut. Mel timeam efficiendi ei, an rebum volutpat mei.

## Subtitle

Ex altera facilis eos, ius everti malorum eu, [vidit definitiones](#) nam ut. Sed sanctus fierent expetendis ex. His alia postea aliquid id, sea eruditi sanctus antiopam ne. In scripta pertinacia concludaturque sea, his dicunt consequat eu, altera impedit at usu. Eam et omnesque tractatos, incorrupte honestatis in est.

Ex malis saepe consequat eam, ad nec laoreet delicatissimi, mei ancillae scriptorem eu. Id vix justo molestie instructior. Eam option constituam ut. Nec ne dicta inimicus suavitate, ei ius tollit gubergren conceptam, veritus cotidieque mel in.

Per ceteros vivendum imperdiet et, in eam eros dicat definiebas, per id vitae fuisset omnesque. Vel no latine equidem dolores, mentitum perfecto ei mei. Nullam accusamus referrentur ad quo. Copiosae gloriatur mei cu.

```
let read = reader
    .for_each(move |message| {
        println!("Server Received message: {:?}", message.body);

        Ok(())
    })
    .and_then(|()| {
        println!("Socket received FIN packet and closed connection");

        Ok(())
    })
    .or_else(|err| {
        println!("Socket closed with error: {:?}", err);

        // We have to return the error to catch it in the next ``.then` call
        Err(err)
    })
    .then(|result| {
        println!("Socket closed with result: {:?}", result);

        Ok(())
    });

handle.spawn(read);
```

Per ceteros vivendum imperdiet et, in eam eros dicat definiebas, per id vitae fuisset omnesque. Vel no latine equidem dolores, mentitum perfecto ei mei. Nullam accusamus referrentur ad quo. Copiosae gloriatur mei cu.

* Per ceteros vivendum imperdiet et, in eam eros dicat definiebas, per id vitae fuisset omnesque. Vel no latine equidem dolores, mentitum perfecto ei mei. Nullam accusamus referrentur ad quo. Copiosae gloriatur mei cu.

* Per ceteros vivendum.
