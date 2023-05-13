export let movieData = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    poster:
      "data:image/jpeg;base64,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",
    genre: ["Drama"],
    rating: 9.3,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    poster:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYAdgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABgMHAQQFAgj/xABKEAACAQMCAQcEDwQHCQAAAAABAgMABBEFIRIGEyIxQVFxBxQyYSMzQlJTcnOBkZKhsbKzwQgVN9E0NTZigqLDFkVUVZPC0vDx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEAAgICAgIDAQEAAAAAAAAAAAECEQNBITESMgRR8CIT/9oADAMBAAIRAxEAPwC8aKKKAKt8tdybGG1ukVWkigk4cjtLKKpCXlJq8gIa8wp7FjQfpVx/tBbaZan+7/qJVDqCzBVBLE4AHaazjCLbbQOTVUdIcoNWznz1vqJ/Ksf7Qargjz59xj0V/lWt5jd4U+bTYLFR0Duw6x9h+iu/A1rJBIrRo6iQBiLQ9AhurZe7A/Wm1FaBW9nI/fmqf8fMPAgfpWDrmqf8xuPr11wIFYKyjilmJRvNWJPQwF3Qe6wersrxpqnzKG3msiZQ0ryOYCWXbo9SH3XaM47qP5+g5+zljW9UBBGoXGR3vXs69qx/3hL9C/yrsCa0hjRPNUllmKcJ82xkYHER0d8ZLberwrTvLNltZI4UZpJZ2dQLZlJTo4AyvYc9o7t80Jxeg5WzSOu6qTk30v0L/Kvdvyg1GKaN5rp5I1YF0Kr0lzv2d1aTWlwI+cMEgTh4uIqcY761n9BvCq8YvRPkz6y8nKheStuFORzkmPrmmalnyc/2TtfjP+I0zVMPVFvsKKKKsQUUUUAVF+0F/VVtt7n/AFEqireUW88cxTj5tg/DnGcb9xq9f2ggDpVuTnIXIx8olUMRkUo82KWhnt52mLqkceOel2aU8RIDE7BD77ON6zYxy2yT2xSECV5JDxSuBwggN1R42x9ucVxDeTQySRxlQvOud1BOWGDv4VmXU7mTpPzXFwspbmlzhs5Gces/TU+A/I64jnvb21mjWFGRnfhaRiWySR1IceifWfVW9FJfO4aO1t2bKkqJychSG95jYHfHeMb7UunUrqFysTqAD2oD2H/yP016XVb1uekMx4xDgEADrdAfsH2UnBgpI3kL35tFhSNY7dHt1zOzc4vCFJBCbfON89Vbga4Z0tzaR9JpEXhlOBgsTvzZHuTsd9xsKXbW9uLWPm4WUL/eQH762ZdVu/YH4ouc4OLj5lc5427cU3AFJE93cQ+ZmB4dvNoyjRzZKqD0c5Qe+zXDcHgbwrckuJLlZ5JeHiEKoOFQBgOmOqtR/QbwNXFUS3Z9Y+TteHkpajOek/4jTLS55Pv7L23xn/EaY6jH6ot9hRRRViCiiigCpP2gMfueDPWVwP8AqJVCt6J8Kvn9oEkaRbgZ3GNvjpVDN6Jx3Uodv9oUtE1z/SpsfCN99R1Ldf0qb5Rvvogi51wGYImQCx7M1WiDEw9lbFYj9Cb1oPxLTbpvJO/v7144rF+AEKZWi4lB8T2HvFdDWfJ5qNpbXM8UMAXmeIiKTiwAVY5XsO3ZtWf+sbovwkV/Usw9jt/kv+968yRvC3DKpVh2EV6mzwW+fgtvDjetCDzH7XOO9B+Nahk9BvA1PGPY5yexB+Jagk9rbwpjPrPyf/2XtvjP+I0x0u8ggByagA6g8n4jTFWWP1Ro+woooqxBRRRQBUvl+/qeHwH5iVQjeifCr88vv9SxfFH5iVQjbqfCph2/2hT0T3gxdzgdkjfeadvJ5aWZiuLm4t45p45QsYkUNwYAJYevpAfN40kXZzdTkfCMftrt8n9SjsOcMtzzPFJnADEsMDsFTlTcKQQaUuS4otU4Vxk47MCo59TdponTiwmc7dfeKW7LlDYTW8zwyGbzaLnJY1jIYL3gHFa9ty30y5dUTT78knAAMKknuA4hk+quBY5vR1OcRf5e6cg1Uz22CsxyoA3bPVSnPngts/A7fXenvlHaPe6npz2xk82uH6MUo5sjHSxuOiTuPGkjUAomVUYuihwjHtXnHxXdhlaSObIuSKLBiuc9fNjH10qCT2tvA1sQ+1XOfgh+Yla8noN4VsQfWnIMY5NwfHf8Rphpb8npZuS1qWxklieHq66ZKzx+qNJdhRRRViCiiigCpfL/ALaNB835iVQpHR+ar4/aCVm0i0ZWICHLD3w41H3kVQ53GKUO2TPRNdDFzMO6RvvqfT4fOLq3QPwl34c10LfTogl3qWppILVXYRR7qZmP28I23HXkb9dcu1k4bhGzwAOGB7vX/wC91F2nQqp8lh8nNIh07X5LaLiYTWL8TORuc7DYdn60yaZpmmQW4SCxt+OMhpIgNg3Yy9n/AMqtAupatyiAiS4Z0UI/mjhG4PVxEDtNWFyetr+yjitbgQx20SbRqsRaMnvZDjft2PfmuLLFpW3ydMGnon5T6hHY6S+oyRLwxsFRCOLJOcf5gKpeQcMNsD8Dt9dqtfl2y3PJvUrS3dXe2EU8xzsg4wAPE5O3qNIGnaZFe2kMsjMCqMuMjBAYnxz0h6tj6s7fFVRszy8ujjxe13HV7WOv46VDJ7W3hXb1bSU02OQx3AlRl4RnHFkMudvVlfprivjgbPViunZkfWHk+weStoVAAPFgDuzTHSz5Oed/2RshOAJQGD47870zVEPVGj7CiiiqEFFFFAFTeX4M2kW6qCScDAGSfZEqqdC0Cyll4dX1K0t5/cWcrkcXxmXq8Ov19lW35dDw2VidtnU79vsiVVfKbQyzRX1qiiKZASqjGD257+usXKm43RVbGDWVjsLYLqGbjRncI8cg45LTParD0l96w3qv7yze2kDb+byFjBK+3OoDgNjrGR2HHXTDZaZqRs7y2hctzkI3kJYMnWQO7qyMdtafKlysOm2smDNDExYjq4SQF+fomljdOkKfKsg0rULSJ1N/ZpdcGyc42AD6zTKOUNmkBtNJtliuJQegmyL3scHBAGTSRbymNmxGsnGvDwsDjrBzsR3V1dK0u6vBMsN1Haca8LIQekOvHht2Z6uqqnCPbFGUukb+u3qyaN+69KUm0t2E97dlsc/KTgZ78E7eAxsKi5KSMltcHiICE7k5G4Xswfe79W3zkZ1PksdM0GfUF1Hn1V0Ro1t3RTk46268eFL6lXKsjCOYducZ+fsq8dV/IpWnyMHKUpFFFHNCy9Jk22wOgdu/0R9FLrxRup5qXcjGH2+2vVy5coH4i6LwlmO5HZUHVVkn1b5OZln5JWcqMGV+I5Bz7o0zUh+RD+HVh6pZ/wA1qfKlKlRYUUUUwCiiigCpfL9IE0u06XCzEBfEOp/Q0n6VfQS6aIrmWLhX0cncimny9wG5utBTHEqtIzDPZt+uPppOjiSKAta28QYDK7gDPeT3Vy5kujWF9kV1yqs7JHjs/ZZQOEcI2Hz0lXt1Le3UlzOQXc9nUB3VDIQZHKuXUsSHIwW9fz1iujHijDoxnNy7HXkPpVtdqkk8YbYsx798AU6x2dtbalbyQxKgKMpwPAj9aXuQ6c3pCP75VH3n9aYTJko3c36GuDNJubOmCSSIuXaCfkjfpn0VWQf4WB/SqdjwJFLdWRn6auHlAfOdHvYexrdx/lNU0DtXR8XmDRlm9kzv3EljJacZSNhGhChdj1gDqrgVu6Pp51S+W0WQRFlZucZcquFJ6XcNsZ7M1t3mhS2NpJLcSoJVY4TDdIA4PWo7MNnuI23reKUOLFkk8nNF/wDkQ/h1YfKz/mtT7SF5D/4c2Hys/wCa1PtUSFFFFABRRRQBTPl7crq2hY+AuDj/ABR1XWr6s/7pdFQIZMR5B7CDn7AaKKxlFOaspPgVqKxRXQYlk8mJub0mGMDYKv3CuwZ8CiivLn7M7Y9EFxcM0MiEDDKQfoqpUyUXwFFFdXxemY5tG1Y3t1p9wLiymMMwBXjAB2+ceFbV3yg1i9t2tru/kkhf0k4VGd89gooroaVmNs+hPIf/AA5sPlZ/zWp9oooLCiiigD//2Q==",
    genre: ["Drama", "Crime"],
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    poster:
      "data:image/jpeg;base64,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",
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    poster:
      "data:image/jpeg;base64,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",
    genre: ["Comedy", "Drama", "Romance"],
    rating: 8.8,
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    poster:
      "data:image/jpeg;base64,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",
    genre: ["Crime", "Drama"],
    rating: 8.9,
  },
];