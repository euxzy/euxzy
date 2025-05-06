## Hi! I'm euxzy

```typescript
class SoftwareEngineer {
    public readonly name = "Muhamad Rijal"
    public languages = ["id_ID", "en_US"]
    public techStack = ["Typescript", "Svelte", "Vue", "React", "Bun"]

    sayHello() {
        console.log("Hello 👋! My name is euxzy, hope you find something that sparks your interest.")
    }

    learnTechStack(tech: string) {
        this.techStack.push(tech)
        return this
    }

    learnLanguage(lang: string) {
        this.languages.push(lang)
        return this
    }
}

const me = new SoftwareEngineer()
me.sayHello()

// Currently diving into Japanese and gamedev with Unity
me.learnLanguage("ja_JP").learnTechStack("C#")
```

![visitors](https://visitor-badge.laobi.icu/badge?page_id=euxzy)
