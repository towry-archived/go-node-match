
package main 

import (
	"os"
	"fmt"
)

func main() {
	f, err := os.Open("./test.txt")
	if err != nil {
		panic("can not open the file.")
	}

	defer f.Close()

	count := 0

	for {
		b := make([]byte, 100)
		n, err := f.Read(b)
		count += n
		if err != nil {
			fmt.Println("done", count)
			return
		}
	}
}
