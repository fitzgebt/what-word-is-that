# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

d = Round.new
d.win = true
d.save
c = Round.new
c.win = true
c.save
b = Round.new
b.win = true
b.save

# temp word bank
words = ["fancy
internal
whimsical
dinner
suggestion
hurl
defeated
curtain
married
uptight
honorable
tranquil
wide-eyed
immolate
wet
vague
superb
deny
advice
intelligent
download
scared
waggish
vegetable
slave
infamous
delightful
move
chief
addition
exclaim
nervous
afterthought
poison
weave
finger
bat
nerve
fumbling
depend
let
fish
end
frantic
trite
game
excited
jellyfish
believe
relate
run
receptive
receipt
convince
ashamed
step
guitar
expansion
sink
drive
board
hose
cluttered
smell
remake
mould
guitar
nervous
contest
early
island
coat
vulgar
bear
soft
rise
new
guess
government
cross
oafish
gorgeous
sharp
foregoing
size
brake
abrupt
fast
van
owl
hose
absorbing
quarrelsome
square
hew
clumsy
nimble
cowardly
various
thundering
initiate
nail
nimble
maid
improve
share
screw
drop
subscribe
humorous
back
frail
marvelous
voracious
unkempt
country
actor
vase
belong
guttural
noise
construe
wary
choose
regret
weak
massive
automatic
steal
limp
second-hand
infuse
hammer
efficacious
connection
representative
giraffe
spell
sink
glow
wed
note
nest
great
erase
condemned
name
favour
wish
minute
sea
page
political
spring
sacrifice
mew
grass
abundant
direct
unarmed
tire
include
alive
delete
plan
opt
scarf
easy
black-and-white
incise
incise
glistening
songs
spill
match
oval
chin
cleave
work
wire
utter
plastic
color
painful
kiss
fax
grubby
earsplitting
sock
tendency
rural
answer
tongue
alive
cause
able
vacation
migrate
deny
property
note
mountainous
competition
powerful
retch
idiotic
straight
ask
say
angry
conspire
spiky
imbibe
nip
tight
confiscate
grain
blur
note
morning
light
cherry
bury
birth
like
step
stove
bath
box
sheet
well-groomed
faucet
yellow
report
insure
advertisement
wry
school
liquid
gainful
connection
fry
wandering
wide-eyed
infamous
pause
freeze
ill
sash
omniscient
puffy
ethereal
cut
vest
sleepy
snails
wretched
rend
slip
toy
sisters
elegant
jumbled
gorgeous
locket
please
train
cautious
church
confused
partake
corn
construe
tee
notebook
"]
new_words = words[0].split("\n")
new_words.each do |word|
    w = Word.new
    w.name = word
    w.round_id = 0
    w.save
end